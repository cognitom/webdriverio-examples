# Express and Tunneling

Basically the same as [WDIO w/o Local Selenium](../wdio-wo-local-selenium). This example needs Java installed to your local system.

- Pros: tunneling feature from TestingBot
- Cons: it needs Java environment for [this](https://github.com/testingbot/Testingbot-Tunnel)

## Requirements

A cloud testing service account is needed: [Saucelabs](https://www.saucelabs.com/), [BrowserStack](https://www.browserstack.com/) or [TestingBot](https://testingbot.com/). This example uses TestingBot.

- Node.js and Java are installed to your local system
- TestingBot account
- TestingBot key (set to `$TESTINGBOT_KEY` as an environment variable)
- TestingBot secret (set to `$TESTINGBOT_SECRET` as an environment variable)

## Usages

At the first, clone or download this dir. Then install dependencies:

```bash
$ npm install
```

This example has `devDependencies` below:

- [Express](http://expressjs.com/): web server
- [Mocha](https://mochajs.org/): testing framework
- [PhantomJS](http://phantomjs.org/): browser for local testing
- [WebdriverIO](http://webdriver.io/): WebDriver and test runner (wdio)
  - wdio-mocha-framework
  - wdio-spec-reporter
  - wdio-phantomjs-service
  - wdio-testingbot-service

Note: Selenium standalone server is not needed.

Run the local test:

```bash
$ npm run test-local
```

```
[phantomjs #0b] Session ID: b9931a06-a32d-4ccf-9c0e-21a26c2013d1
[phantomjs #0b] Spec: /Users/cognitom/Git/webdriverio-examples/standard/test/e2e/first.js
[phantomjs #0b] Running: phantomjs
[phantomjs #0b]
[phantomjs #0b]   First Test Group
[phantomjs #0b]       ✓ gets the title of page one
[phantomjs #0b]
[phantomjs #0b] 1 passing (5s)
...
```

Run the cloud test:

```bash
$ npm run test-cloud
```

```
[chrome latest WIN10 #0b] Session ID: 88a1689e-a2b6-49cd-a045-5ecd4c5264ff
[chrome latest WIN10 #0b] Spec: /Users/cognitom/Git/webdriverio-examples/standard/test/e2e/first.js
[chrome latest WIN10 #0b] Running: chrome (vlatest) on WIN10
[chrome latest WIN10 #0b]
[chrome latest WIN10 #0b]   First Test Group
[chrome latest WIN10 #0b]       ✓ gets the title of page one
[chrome latest WIN10 #0b]
[chrome latest WIN10 #0b] 1 passing (24s)
...
```

Or run both:

```bash
$ npm test
```

## Test files

- `test/`
  - `e2e/`
    - `first.js` : the first group of tests
    - `second.js` : the second group of test
  - `wdio.conf.base.js` : base settings
  - `wdio.conf.cloud.js` : settings for the cloud environment
  - `wdio.conf.local.js` : settings for the local environment
