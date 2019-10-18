import {jsTPS} from '../../src/jstps/jsTPS.js'
import Num from './Num.js'
import AddToNum_Transaction from './AddToNum_Transaction.js';

let tps = new jsTPS();
let num = new Num();

let outputDiv = document.getElementById("jsTPS_user_output");
outputDiv.innerHTML = tps.toString();
outputDiv.innerHTML += "num is " + num.getNum() + "<br><br> ENTER A SELECTION";

let addTransactionButton = document.getElementById("add_transaction");
let undoTransactionButton = document.getElementById("undo_transaction");
let redoTransactionButton = document.getElementById("redo_transaction");
let clearTransactionsButton = document.getElementById("clear_transactions");
let resetNumAndTransactionsButton = document.getElementById("reset_num_and_transactions");

let addAmountTextField = document.getElementById("add_amount");

addTransactionButton.onclick = function()
{
    if (addAmountTextField.value === "")
    {
        return;
    }

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

undoTransactionButton.onclick = function()
{
    tps.undoTransaction();
    outputDiv.innerHTML = tps.toString();
    outputDiv.innerHTML += "<br><br>num is " + num.getNum() + "<br><br> ENTER A SELECTION";
}

redoTransactionButton.onclick = function()
{
    tps.doTransaction();
    outputDiv.innerHTML = tps.toString();
    outputDiv.innerHTML += "<br><br>num is " + num.getNum() + "<br><br> ENTER A SELECTION";
}

clearTransactionsButton.onclick = function()
{
    tps.clearAllTransactions();
    outputDiv.innerHTML = tps.toString();
    outputDiv.innerHTML += "<br><br>num is " + num.getNum() + "<br><br> ENTER A SELECTION";
}

resetNumAndTransactionsButton.onclick = function()
{
    tps.clearAllTransactions();
    num.setNum(0);
    outputDiv.innerHTML = tps.toString();
    outputDiv.innerHTML += "<br><br>num is " + num.getNum() + "<br><br> ENTER A SELECTION";
}
