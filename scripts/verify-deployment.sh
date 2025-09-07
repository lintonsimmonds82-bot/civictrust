#!/bin/bash

# CivicTrust Deployment Verification Script
# Verifies successful deployment to production

set -e

PRODUCTION_URL="https://civictrust.vercel.app"
TIMEOUT=30

echo "🚀 Verifying CivicTrust deployment..."
echo "Production URL: $PRODUCTION_URL"
echo "Timeout: ${TIMEOUT}s"
echo ""

# Function to wait for deployment
wait_for_deployment() {
    local url=$1
    local timeout=$2
    local elapsed=0
    
    echo "⏳ Waiting for deployment to be ready..."
    
    while [ $elapsed -lt $timeout ]; do
        if curl -s --max-time 10 "$url" > /dev/null 2>&1; then
            echo "✅ Deployment is ready!"
            return 0
        fi
        
        echo "Waiting... (${elapsed}s/${timeout}s)"
        sleep 5
        elapsed=$((elapsed + 5))
    done
    
    echo "❌ Deployment timeout after ${timeout}s"
    return 1
}

# Function to run smoke tests
run_smoke_tests() {
    echo "🧪 Running smoke tests..."
    
    # Test main page
    echo -n "Testing homepage... "
    if curl -s --max-time 10 "$PRODUCTION_URL" | grep -q "CivicTrust"; then
        echo "✅ OK"
    else
        echo "❌ FAILED"
        return 1
    fi
    
    # Test health endpoint
    echo -n "Testing health endpoint... "
    health_response=$(curl -s --max-time 10 "$PRODUCTION_URL/healthz")
    if echo "$health_response" | grep -q '"status":"ok"'; then
        echo "✅ OK"
    else
        echo "❌ FAILED"
        echo "Response: $health_response"
        return 1
    fi
    
    # Test security headers
    echo -n "Testing security headers... "
    headers=$(curl -s -I --max-time 10 "$PRODUCTION_URL")
    if echo "$headers" | grep -q "X-Frame-Options" && echo "$headers" | grep -q "X-Content-Type-Options"; then
        echo "✅ OK"
    else
        echo "❌ FAILED"
        return 1
    fi
    
    # Test HTTPS
    echo -n "Testing HTTPS... "
    if curl -s --max-time 10 "$PRODUCTION_URL" | grep -q "https"; then
        echo "✅ OK"
    else
        echo "❌ FAILED"
        return 1
    fi
    
    return 0
}

# Function to check performance
check_performance() {
    echo "📊 Checking performance..."
    
    # Measure response time
    echo -n "Measuring response time... "
    response_time=$(curl -s -o /dev/null -w "%{time_total}" "$PRODUCTION_URL")
    response_time_ms=$(echo "$response_time * 1000" | bc | cut -d. -f1)
    
    if [ "$response_time_ms" -lt 3000 ]; then
        echo "✅ OK (${response_time_ms}ms)"
    else
        echo "⚠️  SLOW (${response_time_ms}ms)"
    fi
    
    # Check if gzip is enabled
    echo -n "Checking compression... "
    if curl -s -H "Accept-Encoding: gzip" -I "$PRODUCTION_URL" | grep -q "Content-Encoding: gzip"; then
        echo "✅ OK (gzip enabled)"
    else
        echo "⚠️  NO COMPRESSION"
    fi
}

# Function to verify environment
verify_environment() {
    echo "🔧 Verifying environment..."
    
    # Check if this is production
    echo -n "Checking environment... "
    health_response=$(curl -s "$PRODUCTION_URL/api/health")
    env=$(echo "$health_response" | grep -o '"environment":"[^"]*"' | cut -d'"' -f4)
    
    if [ "$env" = "production" ]; then
        echo "✅ OK (production)"
    else
        echo "⚠️  WARNING (environment: $env)"
    fi
    
    # Check build time
    echo -n "Checking build... "
    build_time=$(echo "$health_response" | grep -o '"buildTime":"[^"]*"' | cut -d'"' -f4)
    if [ -n "$build_time" ]; then
        echo "✅ OK (built: $build_time)"
    else
        echo "⚠️  NO BUILD TIME"
    fi
}

# Main execution
echo "======================================="
echo "CivicTrust Deployment Verification"
echo "======================================="

# Wait for deployment
if ! wait_for_deployment "$PRODUCTION_URL" "$TIMEOUT"; then
    echo "❌ Deployment verification failed: timeout"
    exit 1
fi

echo ""

# Run smoke tests
if ! run_smoke_tests; then
    echo "❌ Deployment verification failed: smoke tests"
    exit 1
fi

echo ""

# Check performance
check_performance

echo ""

# Verify environment
verify_environment

echo ""
echo "======================================="
echo "✅ Deployment verification completed successfully!"
echo "======================================="
echo ""
echo "🔗 Production URL: $PRODUCTION_URL"
echo "📊 Health Check: $PRODUCTION_URL/healthz"
echo "📈 Status: All systems operational"
echo ""
echo "Next steps:"
echo "1. Monitor application metrics"
echo "2. Check user feedback"
echo "3. Review performance data"
echo ""