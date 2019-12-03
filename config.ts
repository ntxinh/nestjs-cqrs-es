import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const envDevelopmentName = 'development';
const env = process.env.NODE_ENV || envDevelopmentName;
const configs = {
  base: {
    ENV: env,
    DEV: env === envDevelopmentName,
    // General
    NAME: process.env.APP_NAME || '',
    TITLE: process.env.APP_TITLE || 'Heroes',
    DESCRIPTION: process.env.APP_DESCRIPTION || 'Heroes API Microservice',
    // API
    PREFIX: process.env.APP_PREFIX || 'v1',
    VERSION: process.env.APP_VERSION || '1.0',
    API_EXPLORER_PATH: process.env.APP_API_EXPLORER_PATH || '/api',
    // Server
    HOST: process.env.APP_HOST || '0.0.0.0',
    PORT: process.env.APP_PORT || 7070,
  },
  development: {},
  production: {
    PORT: process.env.APP_PORT || 7071,
  },
  test: {
    PORT: 7072,
  },
};
const config = {...configs.base, ...configs[env]};

export {config};