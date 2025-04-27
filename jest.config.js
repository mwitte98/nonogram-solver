/** @type {import('jest').Config} */
const config = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  setupFilesAfterEnv: ['./src/setup-jest.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', 'html$'],
};

export default config;
