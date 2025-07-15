/**
 * Jest configuration
 */
module.exports = {
  cache: false,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./tests/setup.js'],
};