'use strict'
const assert = require('assert')

module.exports = () => {

  describe('Second Test Group', () => {
    it('gets the title of GitHub toppage', () => {
      browser
        .url('https://github.com/')
        .getTitle().then(title => {
           assert.equal(title, 'How people build software · GitHub')
        })
    })
  })

}
