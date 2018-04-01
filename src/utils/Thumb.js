import PraiseButton from './PraiseButton.js';
class Thumb extends PraiseButton {
	constructor(selector) {
		super(); // 调用父类的constructor(x, y)
		this.numNode = $(`<div class="text">当前点赞次数：${this.praiseNum}</div>`);

		this.initNode = $(
           	 `<div class="finger">
                    ${ Array(4).fill(null).map(() => '<div class="f"></div>').join('') }
		    </div>
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
	        // const shadow = this.initNode.addClass('btn-shadow');
			alert(this.praiseNum);
			this.addOne();
			// this.node = this.initNode.clone();
			// $(selector).append(this.node.append(this.numNode));
			// this.node.on('click', this.onAddOneChange.bind(this));
	}
	onChange(num) {
        this.numNode.find('span').text(num);
    }
}
export default Thumb;