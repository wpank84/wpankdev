/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/main.js":
/*!**************************************!*\
  !*** ./app/javascript/packs/main.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var cursor = document.querySelector('.cursor');
cursor.classList.add('is-invisible');
var positioner = document.addEventListener('mousemove', function (e) {
  cursor.classList.remove('is-invisible');

  if (cursor.classList.contains('cursor-small')) {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;');
  } else {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 20) + 'px; left: ' + (e.pageX - 20) + 'px;');
  }
});
var cursorLinks = document.querySelectorAll('a');
cursorLinks.forEach(function (item) {
  item.addEventListener('pointerover', function (e) {
    cursor.classList.remove('cursor-small');
    cursor.classList.add('cursor-big');
  });
  item.addEventListener('pointerout', function (e) {
    cursor.classList.remove('cursor-big');
    cursor.classList.add('cursor-small');
  });
});
var root = document.documentElement;
colors = ['aquamarine', '#fdbb41', '#0099ff', '#ec6060'];
root.style.setProperty('--underline', colors[randomize(colors.length)]);

function randomize(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  console.log($navbarBurgers); // Check if there are any navbar burgers

  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      var target = el.dataset.target;
      var $target = document.getElementById(target);
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
      el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main-8c42e747c02859dca2cc.js.map