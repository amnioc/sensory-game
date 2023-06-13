export default {
  roots: ["<rootDir>/src"],
  /* Jest transformations -- this adds support for TypeScript
  using ts-jest */
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "node",
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
