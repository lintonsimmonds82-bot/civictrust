#!/bin/bash

# CivicTrust Health Check Script
# Performs comprehensive health checks on the application

set -e

BASE_URL=${1:-"http://localhost:3000"}
echo "🔍 Running health checks for: $BASE_URL"

# Function to check HTTP status
check_http_status() {
    local url=$1
    local expected_status=${2:-200}
    local description=$3
    
    echo -n "Checking $description... "
    
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url" || echo "000")
    
    if [ "$status" = "$expected_status" ]; then
        echo "✅ OK ($status)"
        return 0
    else
        echo "❌ FAILED ($status, expected $expected_status)"
        return 1
    fi
}

# Function to check response time
check_response_time() {
    local url=$1
    local max_time=${2:-2}
    local description=$3
    
    echo -n "Checking $description response time... "
    
    response_time=$(curl -s -o /dev/null -w "%{time_total}" "$url" || echo "999")
    response_time_ms=$(echo "$response_time * 1000" | bc)
    max_time_ms=$(echo "$max_time * 1000" | bc)
    
    if (( $(echo "$response_time <= $max_time" | bc -l) )); then
        echo "✅ OK (${response_time_ms%.*}ms)"
        return 0
    else
        echo "❌ SLOW (${response_time_ms%.*}ms, max ${max_time_ms%.*}ms)"
        return 1
    fi
}

# Function to check JSON response
check_json_response() {
    local url=$1
    local expected_field=$2
    local description=$3
    
    echo -n "Checking $description JSON response... "
    
    response=$(curl -s "$url" || echo "{}")
    field_value=$(echo "$response" | grep -o "\"$expected_field\"[^,}]*" | cut -d'"' -f4 || echo "")
    
    if [ -n "$field_value" ]; then
        echo "✅ OK ($expected_field: $field_value)"
        return 0
    else
        echo "❌ FAILED (missing $expected_field)"
        return 1
    fi
}

echo "======================================="
echo "CivicTrust Health Check Report"
echo "======================================="
echo "Target: $BASE_URL"
echo "Time: $(date)"
echo ""

# Initialize counters
total_checks=0
passed_checks=0

# Check main pages
echo "📄 Checking main pages:"
for page in "/" "/healthz" "/api/health"; do
    total_checks=$((total_checks + 1))
    if check_http_status "$BASE_URL$page" 200 "$page"; then
        passed_checks=$((passed_checks + 1))
    fi
done

echo ""

# Check response times
echo "⏱️  Checking response times:"
for page in "/" "/healthz"; do
    total_checks=$((total_checks + 1))
    if check_response_time "$BASE_URL$page" 2 "$page"; then
        passed_checks=$((passed_checks + 1))
    fi
done

echo ""

# Check API health endpoint
echo "🔗 Checking API responses:"
total_checks=$((total_checks + 1))
if check_json_response "$BASE_URL/api/health" "status" "Health API"; then
    passed_checks=$((passed_checks + 1))
fi

echo ""

# Summary
echo "======================================="
echo "Health Check Summary"
echo "======================================="
echo "Total checks: $total_checks"
echo "Passed: $passed_checks"
echo "Failed: $((total_checks - passed_checks))"

if [ $passed_checks -eq $total_checks ]; then
    echo "✅ All health checks passed!"
    exit 0
else
    echo "❌ Some health checks failed!"
    exit 1
fi