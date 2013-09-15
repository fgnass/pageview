var fs = require('fs')
  , path = require('path')

module.exports = function (dir, opts) {

  var ext = opts && opts.ext

  /**
   * Return the express app setting with the given `name` or `defaultValue`
   * when the value is either falsy or the `req` has no `app` property.
   */
  function setting(req, name, defaultValue) {
    var val = req.app && req.app.get(name)
    return val || defaultValue
  }

  return function (req, res, next) {

    // If no `ext` was specified use the `view engine` setting
    if (!ext) ext = setting(req, 'view engine', 'jade')

    if (!dir) {
      // If no `dir` is set add '/static' to the `views` setting
      var base = path.dirname(require.main.filename)
      var views = setting(req, 'views', base + '/views')
      dir = path.resolve(views, 'pages')
    }

    // Pass the path and URL to the view
    var data = { path: req.path, url: req.originalUrl }

    function serve(f, index) {
      if (index) f = path.join(f, 'index')
      var fullPath = path.join(dir, f + '.' + ext)
      fs.exists(fullPath, function (exists) {
        if (exists) return res.render(fullPath, data)
        if (index) next()
        else serve(f, true)
      })
    }

    serve(req.path)
  }
}
