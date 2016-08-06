'use strict'
const base = require('./wdio.conf.base')

exports.config = Object.assign({}, base.config, {
  capabilities: [
    { browserName: 'phantomjs' }
    // If you want to use other browsers,
    // you may need local Selenium standalone server.
  ],
  services: ['phantomjs']
})
