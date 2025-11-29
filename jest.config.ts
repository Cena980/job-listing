    // jest.config.js
    const nextJest = require('next/jest');

    const createJestConfig = nextJest({
      // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
      dir: './',
    });

    // Add any custom config to be passed to Jest
    const customJestConfig = {
      setupFilesAfterEnv: ['<rootDir>/app/tests/jest.setup.js'],
      testEnvironment: 'jest-environment-jsdom',
      // Add more Jest configurations here if needed
    };

    module.exports = createJestConfig(customJestConfig);