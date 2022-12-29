const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  coverageReporters: ['text-summary', 'json', 'html'],
  coveragePathIgnorePatterns: [
    '-facade.service.ts$',
    'routing.module.ts$',
    '/node_modules/',
    '/libs/pdf-viewer/',
  ],
};
