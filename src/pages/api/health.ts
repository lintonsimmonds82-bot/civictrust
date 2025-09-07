import type { NextApiRequest, NextApiResponse } from 'next';

interface HealthResponse {
  status: 'ok' | 'error';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
  buildTime?: string;
  services: {
    database: 'healthy' | 'unhealthy';
    external_apis: 'healthy' | 'unhealthy';
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({
      status: 'error',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      services: {
        database: 'unhealthy',
        external_apis: 'unhealthy',
      },
    });
    return;
  }

  try {
    // Check system health
    const healthStatus: HealthResponse = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      buildTime: process.env.BUILD_TIME,
      services: {
        // Add real health checks here when integrating with databases/APIs
        database: 'healthy', // This would check actual DB connection
        external_apis: 'healthy', // This would check external service availability
      },
    };

    // Set cache headers for health checks
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.status(200).json(healthStatus);
  } catch (error) {
    console.error('Health check failed:', error);
    
    res.status(503).json({
      status: 'error',
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      services: {
        database: 'unhealthy',
        external_apis: 'unhealthy',
      },
    });
  }
}