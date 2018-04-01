/**
 * PraiseButton
 * @class
 */
class PraiseButton{
	constructor(initNum=0) {
	    this.praiseNum= initNum;
	}
	addOne(){
		this.praiseNum++;
		this.onChange(this.praiseNumber);
	}
	onChange() {}
}

export default PraiseButton;
