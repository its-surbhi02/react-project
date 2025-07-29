// module.exports = {
//   testEnvironment: 'jest-environment-jsdom',
//   transform: {
//     '^.+\\.(js|jsx)$': 'babel-jest',
//   },
//   moduleFileExtensions: ['js', 'jsx'],
//   setupFilesAfterEnv: ['@testing-library/jest-dom'],
//   setupFiles: ['./jest.setup.js'],  // 👈 Add this line
// };

// jest.config.js
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }],
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  setupFiles: ['./jest.setup.js'], 
};
