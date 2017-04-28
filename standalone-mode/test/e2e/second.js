'use strict'
const assert = require('assert')

module.exports = () => {

  describe('Second Test Group', () => {
    it('gets the title of GitHub toppage', () => {
      return browser
        .url('https://github.com/')
        .getTitle().then(title => {
           assert.equal(title, 'The world\'s leading software development platform · GitHub')
        })
    })
  })

}
