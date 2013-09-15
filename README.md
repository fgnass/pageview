## pageview [![Build Status](https://travis-ci.org/fgnass/pageview.png)](https://travis-ci.org/fgnass/pageview)

Express middleware to serve pages built from static views.

Pageview allows you to include static pages in your express app that use the
templating engine of your choice to generate the markup.

### Usage

By default pageview looks for files in the app's `<views>/pages` directory with
the extension of the configured `view engine`:

```js
var express = require('express')
  , pageview = require('pageview')
  , app = express()

app.set('view engine', 'jade')
app.use(pageview())
```

Alternatively you may pass the directory as well the file extension:

```js
app.use(pageview(__dirname + '/pages', { ext: 'ejs' }))
```

You can also mount a directory to a URL prefix like this:

```js
app.use('/mounted', pageview(__dirname + '/microsite'))
```

### The MIT License (MIT)

Copyright (c) 2013 Felix Gnass

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


