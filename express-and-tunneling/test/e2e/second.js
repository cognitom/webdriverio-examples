'use strict'
const assert = require('assert')

describe('Second Test Group', () => {
  it('gets the title of page two', () => {
    const title = browser.url('/two.html').getTitle()
    assert.equal(title, 'Two')
  })
})
