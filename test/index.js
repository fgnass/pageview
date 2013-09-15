var request = require('supertest')
  , app = require('./fixture/app')

describe('pageview', function() {

  var expect = {
    '/': /Top-Level Index Page/,
    '/page': /Top-Level Page/,
    '/nested': /Nested Index/,
    '/nested/': /Nested Index/,
    '/nested/page': /Nested Page/,
    '/nested/deep': /Nested Folder/,
    '/nested/deep/': /Nested Folder/,
    '/mounted': /Mounted Index/,
    '/mounted/sub': /Mounted Page/
  }

  for (var path in expect) {
    it(path, function(done) {
      request(app).get(path).expect(expect[path], done)
    })
  }

})
