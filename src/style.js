'use strict';
var autoprefixer = require('autoprefixer');

// Sizzle selector
module.exports = function(selector) {
    var styleSheets;
    var cssCache;    

    if (!selector) {
        styleSheets = document.querySelectorAll('style');
    } else {
        styleSheets = document.querySelectorAll(selector);
    }

    [].forEach.call(styleSheets, function(sheet) {
        cssCache = sheet.innerHTML;
        sheet.innerHTML = autoprefixer.process(cssCache, {browsers: ["Chrome <= 40"]});
        cssCache = null;
    });
};