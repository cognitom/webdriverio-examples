'use strict'
const assert = require('assert')

describe('First Test Group', () => {
  it('gets the title of page one', () => {
    const title = browser.url('/one.html').getTitle()
    assert.equal(title, 'One')
  })
})
