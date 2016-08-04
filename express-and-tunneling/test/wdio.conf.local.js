'use strict'
const
  phantomjs = require('phantomjs-prebuilt'),
  base = require('./wdio.conf.base')

let program

exports.config = Object.assign({}, base.config, {
  capabilities: [
    { browserName: 'phantomjs' }
    // If you want to use other browsers,
    // you may need local Selenium standalone server.
  ],
  onPrepare () {
    base.config.onPrepare()
    return phantomjs.run('--webdriver=4444').then(p => program = p)
  },
  onComplete () {
    base.config.onComplete()
    program.kill()
  }
})
