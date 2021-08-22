module.exports = {
  transform: {
    '^.+\\.(js|ts|jsx|tsx)$': [
      'babel-jest',
      { configFile: './babel.config.js' },
    ],
  },
};
