'use strict'
const base = require('./wdio.conf.base')

exports.config = Object.assign(base.config, {
  capabilities: [
    {
      browserName: 'chrome',
      platform: 'WIN10',
      version: 'latest',
      tbTunnel: true
    },
    {
      browserName: 'firefox',
      platform: 'WIN10',
      version: 'latest',
      tbTunnel: true
    },
    {
      browserName: 'microsoftedge',
      platform: 'WIN10',
      version: 'latest',
      tbTunnel: true
    },
    {
      browserName: 'safari',
      platform: 'CAPITAN',
      version: 'latest',
      tbTunnel: true
    }
  ],
  services: ['testingbot'],
  user: process.env.TESTINGBOT_KEY,
  key: process.env.TESTINGBOT_SECRET
})
