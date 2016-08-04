'use strict'
/** Capabilities (browsers) */
const capabilities = [
  { browserName: 'phantomjs' }
]

module.exports = capabilities.map(c => ({ desiredCapabilities: c }))
