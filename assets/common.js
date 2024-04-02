/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./js/sections/common.js ***!
  \*******************************/
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var links = document.links;
  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
    if (links[i].hostname !== window.location.hostname) {
      links[i].target = '_blank';
      links[i].rel = 'noreferrer noopener';
    }
  }
});
/******/ })()
;