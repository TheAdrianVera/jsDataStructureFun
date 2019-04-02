const LinkedList = require('../LinkedList');
const LinkedListNode = require('../LinkedListNode')

/**
  * * * * * * testAdd() TEST * * * * * *
*/
function testAdd(){
  let linkedList = new LinkedList();
  linkedList.add('A');
  linkedList.add('B');
  linkedList.add('C');
  linkedList.add('D');
  let linkedListTest = linkedList.printLinkedList();
  let linkedListExpected = "Head -> A[ ] -> B[ ] -> C[ ] -> D[ ] -> NULL";
  return (linkedListTest === linkedListExpected)? true: false;
}

/**
  * * * * * * insertAt() TEST * * * * * *
*/
function testInsertAt0(){
  let linkedList = new LinkedList();
  linkedList.add('A');
  linkedList.add('B');
  linkedList.add('C');
  linkedList.add('D');
  linkedList.insertAt('Z',0);
  let linkedListTest = linkedList.printLinkedList();
  let linkedListExpected = "Head -> Z[ ] -> A[ ] -> B[ ] -> C[ ] -> D[ ] -> NULL";
  return (linkedListTest === linkedListExpected)? true: false;
}

/**
  * * * * * * removeFrom() TEST * * * * * *
*/
function testRemoveFrom(){

}

/**
  * * * * * * remove() TEST * * * * * *
*/
function testRemove(){

}

//Logs of Linked Lists Tests
//console.log(testAdd());
//console.log(testInsertAt0());
