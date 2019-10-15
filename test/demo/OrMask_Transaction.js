import jsTPS_Transaction from '../src/jstps/jsTPS.js'

class OrMask_Transaction extends jsTPS_Transaction
{
    constructor(initNum, initIntNum, initMask)
    {
        super();
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    doTransaction()
    {
        this.num.orMask(this.mask);
    }

    undoTransaction()
    {
        this.num.setNum(this.intNum);
    }

    toString()
    {
        return "Or Mask " + this.mask;
    }
}