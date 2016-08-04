# Without local Selenium

This example doesn't need Selenium installation locally.

## Requirements

A cloud testing service account is needed: [Saucelabs](https://www.saucelabs.com/), [BrowserStack](https://www.browserstack.com/) or [TestingBot](https://testingbot.com/). This example uses TestingBot.

- TestingBot account
- TestingBot key (set to $TESTINGBOT_KEY as an environment variable)
- TestingBot secret (set to $TESTINGBOT_SECRET as an environment variable)

## Usages

At the first, clone or download this dir. Then install dependencies:

```bash
$ npm install
```

This example has `devDependencies` below:

- [Mocha](https://mochajs.org/): testing framework
- [PhantomJS](http://phantomjs.org/): browser for local testing
- [WebdriverIO](http://webdriver.io/): WebDriver

Run the local test only:

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

Run the cloud test only:

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
