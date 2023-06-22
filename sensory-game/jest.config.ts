module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.ts",
  },
  setupFilesAfterEnv: ["<rootDir>/src/__mocks__/setupTests.ts"], //
  roots: ["<rootDir>/src"],
  /* Jest transformations -- this adds support for TypeScript
  using ts-jest */
  transform: {
    // "^.+\\.tsx?$": "ts-jest",
    "\\.tsx?$": "<rootDir>/node_modules/babel-jest", // Use <rootDir> .
  },
  // testEnvironment: "node",
  testRegex: "/__tests__/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
