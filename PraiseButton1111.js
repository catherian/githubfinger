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
class PraiseButton{
	constructor(initNum=0) {
		this.praiseNum= initNum;
	}
	addOne(){
		this.praiseNum++;
	}
}
class Thumb extends PraiseButton {
	constructor(selector) {
		super(); // 调用父类的constructor(x, y)
		this.numNode = $(`<div class="text">当前点赞次数：${this.praiseNumber}</div>`);

		this.initNode = $(
		    `
		    <div class="shouzhang">
		            ${ Array(11).fill(null).map(() => '<div class="s"></div>').join('') }
		    </div>
		    `
		);

		this.node = this.initNode.clone();
		$(selector).append(this.node.append(this.numNode));
		this.node.on('click', this.onAddOneChange.bind(this));
	}
	onAddOneChange() {
	        const shadow = this.initNode.find('.praise__btn').clone().addClass('btn-shadow');

	        this.node.find('.praise__btn').append(shadow);

	        shadow.one('animationend', () => shadow.remove());

	        this.addOne();
	        alert(this.praiseNum);
	}
}
var num=new Thumb();
console.log(num.addOne());