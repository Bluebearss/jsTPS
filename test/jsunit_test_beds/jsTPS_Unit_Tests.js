import {jsTPS} from '../../src/jstps/jsTPS.js'
import Num from '../demo/Num.js'
import AddToNum_Transaction from '../demo/AddToNum_Transaction.js'

var assert = chai.assert;

describe('testAdd()', function()
{
    let num = new Num();
    it('Assert.assertEquals(0, num.getNum())', function()
    {
        assert.equal(num.getNum(), 0);
    });
});
