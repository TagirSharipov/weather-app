/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');



const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  const nextConfig = {
    experimental: {
      appDir: true,
    },
    env: {
      API_KEY: '6de2349d1dc843faaf7123054231404',
    }
  };
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {...nextConfig,
      env: {
        ...nextConfig.env,
        BUILD_TIME: `${new Date().toISOString()} PROD`,
      }
    };
  }
  return {...nextConfig,
    env: {
      ...nextConfig.env,
      BUILD_TIME: `${new Date().toISOString()} DEV`,
    }
  };
  
}
