// This file serves as the Webpack entry point and should not contain any
// code except for imports and a single export.
import 'babel-polyfill';
import videojs from 'video.js';
window.videojs = videojs;
import 'videojs-contrib-hls';
import 'file?name=default.html!./default.html';
