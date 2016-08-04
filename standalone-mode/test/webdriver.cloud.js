'use strict'
/** config of connection to the cloud service */
const base = {
  host: 'hub.testingbot.com',
  port: 80,
  user: process.env.TESTINGBOT_KEY,
  key: process.env.TESTINGBOT_SECRET
}

/** Capabilities (browsers) */
const capabilities = [
  {
    browserName: 'firefox',
    version: 'latest',
    platform: 'WINDOWS'
  },
  {
    browserName: 'chrome',
    version: 'latest',
    platform: 'WINDOWS'
  }
]

module.exports = capabilities.map(c => Object.assign({ desiredCapabilities: c }, base))
