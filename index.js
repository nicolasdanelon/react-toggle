if (process.env.NODE_ENV === 'roduction') {
  module.exports = require('./dist/react-switch.min.js');
} else {
  module.exports = require('./dist/react-switch.dev.js');
}
