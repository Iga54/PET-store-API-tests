module.exports = {
  reporter: 'node_modules/mochawesome',
  'reporter-option': [
    'overwrite=true',
    'reportTitle=My Custom Title',
    'showPassed=true',
  ],
  timeout: '5000',
};
