/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./js/sections/video-banner.js ***!
  \*************************************/
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var bannerImage = document.querySelectorAll('[data-video-banner] img');
  var bannerVideo = document.querySelectorAll('[data-home-banner] video');
  bannerVideo.forEach(video => {
    video.onloadeddata = function () {
      bannerImage.forEach(img => {
        img.style.display = "none";
      });
    };
  });
  setTimeout(() => {
    bannerImage.forEach(img => {
      img.style.display = "none";
    });
  }, 3000);
});
/******/ })()
;