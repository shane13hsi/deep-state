/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  setPath: function setPath(obj, path, value) {
	    var leaf = this.resolvePath(obj, path);
	    leaf.obj[leaf.name] = value;
	  },

	  resolvePath: function resolvePath(obj, names) {
	    if (typeof names === 'string') {
	      names = names.split('.');
	    }
	    var lastIndex = names.length - 1;
	    var current = obj;
	    for (var i = 0; i < lastIndex; i++) {
	      var name = names[i];
	      current = current[name];
	    }
	    return {
	      obj: current,
	      name: names[lastIndex]
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  entry: './src/main.js',
	  output: {
	    filename: './lib/index.js'
	  },
	  module: {
	    loaders: [{ test: /\.js$/, loader: 'babel-loader', exlucde: /node_modules/ }]
	  },
	  resolve: {
	    extensions: ['', '.js', '.json']
	  }
	};

/***/ }
/******/ ]);