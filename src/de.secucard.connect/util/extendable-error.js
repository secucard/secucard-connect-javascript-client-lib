/**
 * modified, from dist https://github.com/bjyoungblood/es6-error
 * added just the check for Error.captureStackTrace existence
 * TODO move to separate package
 * using not src, but dist to get readable stack-trace in tests for errors without babel stuff
 */

"use strict";

var _createClass = (function () {
	function defineProperties(target, props) {
		for (var key in props) {
			var prop = props[key];
			prop.configurable = true;
			if (prop.value) prop.writable = true;
		}
		Object.defineProperties(target, props);
	}

	return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
})();

var _get = function get(object, property, receiver) {
	var desc = Object.getOwnPropertyDescriptor(object, property);
	if (desc === undefined) {
		var parent = Object.getPrototypeOf(object);
		if (parent === null) {
			return undefined;
		} else {
			return get(parent, property, receiver);
		}
	} else if ("value" in desc && desc.writable) {
		return desc.value;
	} else {
		var getter = desc.get;
		if (getter === undefined) {
			return undefined;
		}
		return getter.call(receiver);
	}
};

var _inherits = function (subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
	if (superClass) subClass.__proto__ = superClass;
};

var _classCallCheck = function (instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
};

var ExtendableError = (function (_Error) {
	function ExtendableError(message) {
		_classCallCheck(this, ExtendableError);
		if(Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
		this.message = message;
		_get(Object.getPrototypeOf(ExtendableError.prototype), "constructor", this).call(this, message);
	}

	_inherits(ExtendableError, _Error);

	_createClass(ExtendableError, {
		name: {
			get: function () {
				return this.constructor.name;
			}
		}
	});

	return ExtendableError;
})(Error);

module.exports = ExtendableError;