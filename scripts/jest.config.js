module.exports = {
  rootDir: "../",
  testEnvironment: "node",
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ["js", "jsx",'json', 'node'],
  "moduleDirectories": ["src","node_modules"],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "<rootDir>/node_modules/jest-transform-stub",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/scripts/jest/fileTransformer.js"
  },
  testMatch: ['**/src/**/(*.)test.{js, jsx}'], // finds test
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    // '@testing-library/react/cleanup-after-each'
  ] // setupFiles before the tests are ran
};