# Standalone Mode

This example doesn't need Selenium installation locally. See more detail about [standalone mode](http://webdriver.io/guide/getstarted/modes.html#Standalone-Mode) here.

- Pros: flexibility and better control
- Cons: can't use [synchronous mode](http://webdriver.io/guide/getstarted/v4.html#It’s-all-synchronous) (because it's a part of `wdio` test runner)

## Requirements

A cloud testing service account is needed: [Saucelabs](https://www.saucelabs.com/), [BrowserStack](https://www.browserstack.com/) or [TestingBot](https://testingbot.com/). This example uses TestingBot.

- Node.js is installed to your local system
- TestingBot account
- TestingBot key (set to `$TESTINGBOT_KEY` as an environment variable)
- TestingBot secret (set to `$TESTINGBOT_SECRET` as an environment variable)

## Usages

At the first, clone or download this dir. Then install dependencies:

```bash
$ npm install
```

This example has `devDependencies` below:

- [Mocha](https://mochajs.org/): testing framework
- [PhantomJS](http://phantomjs.org/): browser for local testing
- [WebdriverIO](http://webdriver.io/): WebDriver

Run the local test:

```bash
$ npm run test-local
```

```
phantomjs
  First Test Group
    ✓ gets the title of MDN toppage
  Second Test Group
    ✓ gets the title of GitHub toppage

2 passing (702ms)
```

Run the cloud test:

```bash
$ npm run test-cloud
```

```
firefox - latest - WINDOWS
  First Test Group
    ✓ gets the title of MDN toppage
  Second Test Group
    ✓ gets the title of GitHub toppage

chrome - latest - WINDOWS
  First Test Group
    ✓ gets the title of MDN toppage
  Second Test Group
    ✓ gets the title of GitHub toppage

4 passing (46s)
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
  - `e2e.js` : test runner
  - `webdriver.cloud.js` : settings for the cloud environment
  - `webdriver.local.js` : settings for the local environment

Note: basically you don't need to change `e2e.js`.
