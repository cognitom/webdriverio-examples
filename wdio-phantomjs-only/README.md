# WDIO with PhantomJS only

A simplest example with PhantomJS and `wdio` test runner. This example doesn't need the local Selenium standalone server.

- Pros: [synchronous mode](http://webdriver.io/guide/getstarted/v4.html#It’s-all-synchronous)
- Cons: slower than standalone mode while local testing

## Requirements

- Node.js are installed to your local system

## Usages

At the first, clone or download this dir. Then install dependencies:

```bash
$ npm install
```

This example has `devDependencies` below:

- [Mocha](https://mochajs.org/): testing framework
- [PhantomJS](http://phantomjs.org/): browser for local testing
- [WebdriverIO](http://webdriver.io/): WebDriver and test runner (wdio)
  - wdio-mocha-framework
  - wdio-spec-reporter
  - wdio-phantomjs-service

Note: Selenium standalone server is not needed.

Run the (local) test:

```bash
$ npm test
```

```
[phantomjs #0b] Session ID: b9931a06-a32d-4ccf-9c0e-21a26c2013d1
[phantomjs #0b] Spec: /Users/cognitom/Git/webdriverio-examples/standard/test/e2e/first.js
[phantomjs #0b] Running: phantomjs
[phantomjs #0b]
[phantomjs #0b]   First Test Group
[phantomjs #0b]       ✓ gets the title of MDN toppage
[phantomjs #0b]
[phantomjs #0b] 1 passing (5s)
...
```

## Test files

- `test/`
  - `e2e/`
    - `first.js` : the first group of tests
    - `second.js` : the second group of test
  - `wdio.conf.js` : settings (for local)
