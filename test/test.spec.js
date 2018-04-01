import PraiseButton from '../lib/utils/PraiseButton.js';

describe('Praise Button test', function() {
    it('+1 测试', function() {
        const praiseButton = new PraiseButton();
        praiseButton.addOne();
        expect(praiseButton.praiseNumber).toBe(1);
    });

    it('++1 测试', function() {
        const praiseButton = new PraiseButton();
        praiseButton.addOne();
        praiseButton.addOne();

        expect(praiseButton.praiseNumber).toBe(2);
    });
});