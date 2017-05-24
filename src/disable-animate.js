'use strict';

var autoprefixer = require('autoprefixer');
var animationStyles = document.createElement('style');
var disableAnimationStyles = 'transition: none !important;animation: none !important;';
animationStyles.innerHTML = '* {'
    + autoprefixer.process(disableAnimationStyles, { browsers: ["Chrome <= 40"] }) 
    + '}';
animationStyles.type = 'text/css';

document.head.appendChild(animationStyles);
