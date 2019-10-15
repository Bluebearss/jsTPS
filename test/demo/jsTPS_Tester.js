import {jsTPS} from '../../src/jstps/jsTPS.js'
import Num from './Num.js'
import AddToNum_Transaction from './AddToNum_Transaction.js';

let tps = new jsTPS();
let num = new Num();

let outputDiv = document.getElementById("jsTPS_user_output");
outputDiv.innerHTML = tps.toString();
outputDiv.innerHTML += "num is " + num.getNum() + "<br><br> ENTER A SELECTION";

let addTransactionButton = document.getElementById("add_transaction");
let addAmountTextField = document.getElementById("add_amount");
addTransactionButton.onclick = function()
{
    if (!isNaN(addAmountTextField.value))
    {
        let addValue = parseInt(addAmountTextField.value);
        let transaction = new AddToNum_Transaction(num, addValue);
        tps.addTransaction(transaction);
    }

    addAmountTextField.value = "";
    outputDiv.innerHTML = tps.toString();
    outputDiv.innerHTML += "<br><br>num is " + num.getNum() + "<br><br> ENTER A SELECTION";
}
