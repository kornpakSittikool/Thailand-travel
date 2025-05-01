module.exports = function (config) {
  config.set({
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: 'lcov-report' },
        { type: 'text-summary' },
      ],
    },
  });
};
