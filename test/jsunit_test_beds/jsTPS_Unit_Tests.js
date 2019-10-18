import {jsTPS} from '../../src/jstps/jsTPS.js'
import Num from '../demo/Num.js'
import AddToNum_Transaction from '../demo/AddToNum_Transaction.js'

let shouldReturnTrueString = "Should return true<br>";
let shouldReturnFalseString = "Should return false<br>";

function shouldReturnResultString(result)
{
    return "Should return " + String(result) + "<br>";
}

function returnsResultString(result)
{
    return "Function returns " + String(result) + "&#10004<br><br>";
}

let unitTestOutputDiv = document.getElementById("jsTPS_unit_test_output");

let testAddButton = document.getElementById("test_add");
let testUndoButton = document.getElementById("test_undo");
let testRedoButton = document.getElementById("test_redo");
let testClearButton = document.getElementById("test_clear");
let testAndMaskButton = document.getElementById("test_and_mask");
let testOrMaskButton = document.getElementById("test_or_mask");

testAddButton.onclick = function()
{
    let tps = new jsTPS();
    let num = new Num();
    unitTestOutputDiv.innerHTML = "<strong>testAdd() Unit Tests: <br></strong>"
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(0, num.getNum())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(0);
    unitTestOutputDiv.innerHTML += returnsResultString(num.getNum());

    tps.addTransaction(new AddToNum_Transaction(num, 5));
    unitTestOutputDiv.innerHTML += "<strong>ADD 5 TRANSACTION<br></strong>";
    unitTestOutputDiv.innerHTML += "tps.addTransaction(new AddToNum_Transaction(num, 5))<br>";
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(5, num.getNum())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(5);
    unitTestOutputDiv.innerHTML += returnsResultString(num.getNum());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(1, tps.getSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(1);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(0, tps.getRedoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(0);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getRedoSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(1, tps.getUndoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(1);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getUndoSize());

    tps.addTransaction(new AddToNum_Transaction(num, 10));
    unitTestOutputDiv.innerHTML += "<strong>ADD 10 TRANSACTION<br></strong>";
    unitTestOutputDiv.innerHTML += "tps.addTransaction(new AddToNum_Transaction(num, 10))<br>";
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(15, num.getNum())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(15);
    unitTestOutputDiv.innerHTML += returnsResultString(num.getNum());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(2, tps.getSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(2);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(0, tps.getRedoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(0);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getRedoSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(2, tps.getUndoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(2);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getUndoSize());

    tps.addTransaction(new AddToNum_Transaction(num, 20));
    unitTestOutputDiv.innerHTML += "<strong>ADD 20 TRANSACTION<br></strong>";
    unitTestOutputDiv.innerHTML += "tps.addTransaction(new AddToNum_Transaction(num, 20))<br>";
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(35, num.getNum())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(35);
    unitTestOutputDiv.innerHTML += returnsResultString(num.getNum());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(3, tps.getSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(3);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(0, tps.getRedoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(0);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getRedoSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(3, tps.getUndoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(3);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getUndoSize());
}

testUndoButton.onclick = function()
{
    let tps = new jsTPS();
    let num = new Num();
    unitTestOutputDiv.innerHTML = "<strong>testUndo() Unit Tests: <br></strong>"
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(0, num.getNum())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(0);
    unitTestOutputDiv.innerHTML += returnsResultString(num.getNum());

    unitTestOutputDiv.innerHTML += "Assert.assertFalse(tps.hasTransactionToUndo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnFalseString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToUndo());

    unitTestOutputDiv.innerHTML += "Assert.assertFalse(tps.hasTransactionToRedo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnFalseString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToRedo());

    tps.addTransaction(new AddToNum_Transaction(num, 5));
    tps.addTransaction(new AddToNum_Transaction(num, 10));
    tps.addTransaction(new AddToNum_Transaction(num, 20));
    unitTestOutputDiv.innerHTML += "<strong>ADD 3 TRANSACTIONS (5, 10, and 20)<br></strong>";
    unitTestOutputDiv.innerHTML += "tps.addTransaction(new AddToNum_Transaction(num, 5))<br>";
    unitTestOutputDiv.innerHTML += "tps.addTransaction(new AddToNum_Transaction(num, 10))<br>";
    unitTestOutputDiv.innerHTML += "tps.addTransaction(new AddToNum_Transaction(num, 20))<br>";
    unitTestOutputDiv.innerHTML += "Assert.assertTrue(tps.hasTransactionToUndo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnTrueString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToUndo());
    unitTestOutputDiv.innerHTML += "Assert.assertFalse(tps.hasTransactionToRedo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnFalseString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToRedo());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(35, num.getNum())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(35);
    unitTestOutputDiv.innerHTML += returnsResultString(num.getNum());
    unitTestOutputDiv.innerHTML += "Assert.assertTrue(tps.hasTransactionToUndo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnTrueString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToUndo());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(3, tps.getSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(3);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(0, tps.getRedoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(0);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getRedoSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(3, tps.getUndoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(3);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getUndoSize());

    tps.undoTransaction();
    unitTestOutputDiv.innerHTML += "<strong>UNDO A TRANSACTION<br></strong>";
    unitTestOutputDiv.innerHTML += "tps.undoTransaction()<br>";
    unitTestOutputDiv.innerHTML += "Assert.assertTrue(tps.hasTransactionToUndo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnTrueString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToUndo());
    unitTestOutputDiv.innerHTML += "Assert.assertTrue(tps.hasTransactionToRedo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnTrueString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToRedo());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(15, num.getNum())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(15);
    unitTestOutputDiv.innerHTML += returnsResultString(num.getNum());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(3, tps.getSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(3);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(1, tps.getRedoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(1);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getRedoSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(2, tps.getUndoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(2);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getUndoSize());

    tps.undoTransaction();
    unitTestOutputDiv.innerHTML += "<strong>UNDO ANOTHER<br></strong>";
    unitTestOutputDiv.innerHTML += "tps.undoTransaction()<br>";
    unitTestOutputDiv.innerHTML += "Assert.assertTrue(tps.hasTransactionToUndo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnTrueString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToUndo());
    unitTestOutputDiv.innerHTML += "Assert.assertTrue(tps.hasTransactionToRedo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnTrueString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToRedo());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(5, num.getNum())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(5);
    unitTestOutputDiv.innerHTML += returnsResultString(num.getNum());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(3, tps.getSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(3);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(2, tps.getRedoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(2);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getRedoSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(1, tps.getUndoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(1);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getUndoSize());

    tps.undoTransaction();
    unitTestOutputDiv.innerHTML += "<strong>AND ANOTHER<br></strong>";
    unitTestOutputDiv.innerHTML += "tps.undoTransaction()<br>";
    unitTestOutputDiv.innerHTML += "Assert.assertFalse(tps.hasTransactionToUndo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnFalseString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToUndo());
    unitTestOutputDiv.innerHTML += "Assert.assertTrue(tps.hasTransactionToRedo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnTrueString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToRedo());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(0, num.getNum())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(0);
    unitTestOutputDiv.innerHTML += returnsResultString(num.getNum());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(3, tps.getSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(3);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(3, tps.getRedoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(3);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getRedoSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(0, tps.getUndoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(0);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getUndoSize());

    tps.undoTransaction();
    unitTestOutputDiv.innerHTML += "<strong>WE HAVE NO MORE TO UNDO SO THIS SHOULD DO NOTHING<br></strong>";
    unitTestOutputDiv.innerHTML += "tps.undoTransaction()<br>";
    unitTestOutputDiv.innerHTML += "Assert.assertFalse(tps.hasTransactionToUndo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnFalseString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToUndo());
    unitTestOutputDiv.innerHTML += "Assert.assertTrue(tps.hasTransactionToRedo())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnTrueString;
    unitTestOutputDiv.innerHTML += returnsResultString(tps.hasTransactionToRedo());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(0, num.getNum())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(0);
    unitTestOutputDiv.innerHTML += returnsResultString(num.getNum());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(3, tps.getSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(3);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(3, tps.getRedoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(3);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getRedoSize());
    unitTestOutputDiv.innerHTML += "Assert.assertEquals(0, tps.getUndoSize())<br>";
    unitTestOutputDiv.innerHTML += shouldReturnResultString(0);
    unitTestOutputDiv.innerHTML += returnsResultString(tps.getUndoSize());
}

testRedoButton.onclick = function()
{
    let tps = new jsTPS();
    let num = new Num();

    unitTestOutputDiv.innerHTML = "<strong>testRedo() Unit Tests: <br></strong>"
}