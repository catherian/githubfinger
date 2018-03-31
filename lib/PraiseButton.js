'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * PraiseButton
 * @class
 */
// class PraiseButton {
//     constructor(initNumber = 0) {
//         this.praiseNumber = initNumber;
//     }

//     addOne() {
//         this.praiseNumber += 1;
//     }
// }
// class Thumb extends PraiseButton {
//     constructor(selector) {
//         super();

//         this.numNode = $(`<div class="number">当前次数：<span>${this.praiseNumber}</span></div>`);

//         this.initNode = $(
//             `
//             <div class="wrapper">
//                 <div class="praise__btn">
//                     ${ Array(11).fill(null).map(() => '<span class="praise__btn__joints"></span>').join('') }
//                 </div>
//             </div>
//             `
//         );

//         this.node = this.initNode.clone();

//         $(selector).append(this.node.prepend(this.numNode));

//         this.node.on('click', this.onAddOneChange.bind(this));
//     }

//     onAddOneChange() {
//         const shadow = this.initNode.find('.praise__btn').clone().addClass('btn-shadow');

//         this.node.find('.praise__btn').append(shadow);

//         shadow.one('animationend', () => shadow.remove());

//         this.addOne();
//     }

//     onChange(num) {
//         this.numNode.find('span').text(num);
//     }
// }
var PraiseButton = function () {
	function PraiseButton() {
		var initNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

		_classCallCheck(this, PraiseButton);

		this.praiseNum = initNum;
	}

	_createClass(PraiseButton, [{
		key: 'addOne',
		value: function addOne() {
			this.praiseNum++;
		}
	}]);

	return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb(selector) {
		_classCallCheck(this, Thumb);

		// 调用父类的constructor(x, y)
		var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));

		_this.numNode = $('<div class="text">\u5F53\u524D\u70B9\u8D5E\u6B21\u6570\uFF1A' + _this.praiseNumber + '</div>');

		_this.initNode = $('\n\t\t    <div class="shouzhang">\n\t\t            ' + Array(11).fill(null).map(function () {
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
			var shadow = this.initNode.find('.praise__btn').clone().addClass('btn-shadow');

			this.node.find('.praise__btn').append(shadow);

			shadow.one('animationend', function () {
				return shadow.remove();
			});

			this.addOne();
		}
	}]);

	return Thumb;
}(PraiseButton);
// var num=new Thumb();
// console.log(num.addOne());