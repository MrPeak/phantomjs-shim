'use strict';

//just require;
require('./src/polyfill');
require('./src/disable-animate');

var transform = require('./src/style'); 

module.exports = function(selectorList) {
    return transform(selectorList);
};
