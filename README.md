# Phantomjs-shim

Add shim for *phantomjs*

## Usage

Require this module in phantomjs's  and use [browserify](https://github.com/substack/node-browserify#usage) to recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single <script> tag.

```javascript
// sandbox.js

require('@ali/phantomjs-shim')('#theme-style'); // '#theme-style' is specific `<style />` tag's selector in the HTML document

var bodyEl = document.querySelector('body');

return getComputedStyle(bodyEl);
```

```javascript
// phantomJS-evaluate.js

const driver = require('node-phantom-promise');
const phantomjs = require('phantomjs-prebuilt');

...

    * evaluate(options) {
        const { url, type, viewWidth, language } = options;
        const status = yield this.page.open(url);
        
        // Bundle node-style javascript
        const code = yield new Promise((resolve, reject) => {
            browserify('./sandbox.js').bundle((err, buf) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(buf.toString('utf-8'));
            })
        });

        // Evaluate bundled javascript
        bodyStyle = yield this.page.evaluate(new Function(
                'type',
                'htmlStr',
                'viewPort',
                'renderLanguage',
                code
            )
            , type, ''
            , viewWidth
            , language
        );

        return bodyStyle;
    }

...
```

## Features

- [x] AutoPrefix CSS3
- [x] Disable CSS3 animation
- [ ] Handle external CSS 
- [x] Add es5 shim
- [x] Add `classList` shim