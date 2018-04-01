(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', './PraiseButton.js'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./PraiseButton.js'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.PraiseButton);
		global.Thumb = mod.exports;
	}
})(this, function (exports, _PraiseButton2) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _PraiseButton3 = _interopRequireDefault(_PraiseButton2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
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
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Thumb = function (_PraiseButton) {
		_inherits(Thumb, _PraiseButton);

		function Thumb(selector) {
			_classCallCheck(this, Thumb);

			var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));

			// 调用父类的constructor(x, y)
			_this.numNode = $('<div class="text">\u5F53\u524D\u70B9\u8D5E\u6B21\u6570\uFF1A' + _this.praiseNum + '</div>');

			_this.initNode = $('<div class="finger">\n                    ' + Array(4).fill(null).map(function () {
				return '<div class="f"></div>';
			}).join('') + '\n\t\t    </div>\n\t\t    <div class="shouzhang">\n\t\t            ' + Array(11).fill(null).map(function () {
				return '<div class="s"></div>';
			}).join('') + '\n\t\t    </div>\n\t\t    ');

			_this.node = _this.initNode.clone();

			$(selector).append(_this.node.append(_this.numNode));
			_this.node.on('click', _this.onAddOneChange.bind(_this));
			return _this;
		}

		_createClass(Thumb, [{
			key: 'onAddOneChange',
			value: function onAddOneChange() {
				// const shadow = this.initNode.addClass('btn-shadow');
				alert(this.praiseNum);
				this.addOne();
				// this.node = this.initNode.clone();
				// $(selector).append(this.node.append(this.numNode));
				// this.node.on('click', this.onAddOneChange.bind(this));
			}
		}]);

		return Thumb;
	}(_PraiseButton3.default);

	exports.default = Thumb;
});