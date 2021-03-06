'use strict';

const { listen, logger } = require('@carbon/server');
const { HOST, PORT, PROTOCOL } = require('config');
const setupServer = require('./server');

setupServer()
  .then(listen)
  .catch(error => {
    logger.error(error);
    process.exit(1);
  });
