[![Build Status][travis-image]][travis-url] [![MIT License][license-image]][license-url]

# WebdriverIO Examples

Here are some examples for [WebdriverIO](http://webdriver.io/): a well known implementation of WebDriver in NodeJS.

## Testing with WDIO

`wdio` is a test runner specially made for WebdriverIO. It makes your test easier.

- Ex1. [WDIO with PhantomJS only](wdio-phantomjs-only)
- Ex2. [WDIO with PhantomJS and Cloud Testing](wdio-wo-local-selenium): Ex1 + cloud testing
- Ex3. [Express and Tunneling](express-and-tunneling): Ex2 + Tunneling

## Testing in Standalone Mode

If it's the first time you use WebdriverIO, we strongly recomend you to use it with `wdio` like above. But, sometimes `wdio` could be a bit messy when we need to combine some testing tools together. This example shows you how to do it without `wdio`.

- Ex4. [Standalone mode](standalone-mode): basically equivalent to Ex2


[travis-image]:https://img.shields.io/travis/cognitom/webdriverio-examples.svg?style=flat-square
[travis-url]:https://travis-ci.org/cognitom/webdriverio-examples

[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE
