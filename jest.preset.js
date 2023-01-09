const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  coverageReporters: ['text-summary', 'json', 'html'],
  coveragePathIgnorePatterns: ['routing.module.ts$', '/node_modules/'],
};
