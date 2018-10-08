// config should be imported before importing any other file
const throng = require('throng');
const config = require('./config/config');
const app = require('./config/express');
const WORKERS = config.webConcurrency;
require('./config/mongoose');

throng({
  workers: WORKERS,
  lifetime: Infinity
}, start);

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
function start() {
  if (!module.parent) {
    app.listen(config.port, () => {
      console.info(`server started on port ${config.port} (${config.env})`);
    });
  }
}

module.exports = app;
