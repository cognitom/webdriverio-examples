'use strict'
const assert = require('assert')

module.exports = () => {

  describe('First Test Group', () => {
    it('gets the title of MDN toppage', () => {
      return browser
        .url('https://developer.mozilla.org/en-US/')
        .getTitle().then(title => {
           assert.equal(title, 'MDN Web Docs')
        })
    })
  })

}
