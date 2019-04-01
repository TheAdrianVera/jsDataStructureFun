const LinkedListNode = require('./LinkedListNode');

module.exports = class LinkedList{

  constructor(element){
    this.head = null;
    this.size = 0;
  }

  /**
    * @param: Element to be added
    * @return: Nada (Linked List has added element at end)
  */

  add(element){
    let node = new LinkedListNode(element);
    let current;
    //if empty, add node at head
    if(this.head == null){
      this.head = node;
    }
    // if not, iterate through and place node at end
    else{
      //placeholder for current head we are checking
      current = this.head;
      //while there is a next node
      while(current.next){
        //lets change our current node to the next one
        current = current.next;
      }
      //add node at end
      current.next = node;
    }
    this.size++;
  }

  /**
    * @param: Nada
    * @return: String version of Linked List (& Prints out elements of the Linked List)
  */

  printLinkedList(){
    let str = "Head -> ";
    let current = this.head;
    while(current != null){
      str += current.data;
      str += "[ ] -> "
      current = current.next;
    }
    str += "NULL"
    console.log(str);
    return str;

  }

  /**
    * @param: Element to inserted and index of Linked List to be inserted at
    * @return: Nada (Linked List has added element at given index)
  */

  insertAt(element, index){
    let prev;
    //handles when index is out of range of Linked List
    if(index > 0 && index > this.size){
      console.log("Given index is too large, and larger than size of Linked List");
    }
    else if(index < 0){
      console.log("Given index is below 0, and out of range");
    }
    //insert at beginning of Linked List
    else if(index == 0){
      let node = new LinkedListNode(element);
      let current = this.head;
      node.next = current;
      this.head = node;
      this.size++;
    }
    //index in range, let's insert node
    else{
      let node = new LinkedListNode(element);
      let current = this.head;
      let i = 0;
      while(i < index){
        prev = current;
        current = current.next;
        i++;
      }
      node.next = current;
      prev.next = node;
    }
    this.size++;
  }

  /**
    * @param: Index of element to be removed from linkedList
    * @return: Nada (Linked List with element at given index removed)
  */
  removeFrom(index){
    if(index > 0 && index > this.size){
      console.log("Given index is too large, and larger than size of Linked List");
    }
    else if(index < 0){
      console.log("Given index is below 0, and out of range");
    }
    else{
      var current, prev, i=0;
    }
    return;
  }

  // //removes node from a given index of the linked list
  // removeFrom(index){
  //   if(index>0 && index>this.size){
  //     return -1;
  //   }
  //   else{
  //     var current, prev, i=0;
  //     current = this.head;
  //     prev = current;
  //     if(index=0){
  //       current = current.next;
  //     }
  //     else{
  //       while(i<index){
  //         i++;
  //         prev = current;
  //         current = current.next;
  //       }
  //       prev.next = current.next;
  //     }
  //     //decrease size of linked list
  //     this.size--;
  //     //return current.element; returns the element you removed at given index
  //     return;
  //   }
  // }
  //
  // //removes element from linkedList
  // removeElement(element){
  //   //initiated currrent and previous values
  //   var current = this.head;
  //   var prev = null;
  //
  //   //iterating through LinkedList
  //   while(current != null){
  //     if(current.element == element){
  //       //if removing head
  //       if(prev == null){
  //         this.head = current.next;
  //       }
  //       else{
  //         prev.next = current.next;
  //       }
  //       this.size--;
  //       return;
  //     }
  //     else{
  //       prev = current;
  //       current = current.next;
  //     }
  //   }
  //   return;
  // }
  //
  // //Returns index of given removeElement
  // //Param: element to be found
  // //Return: index of given element
  // indexOf(element){
  //   var current = this.head;
  //   var i = 0;
  //
  //   if(current!=null){
  //     while(i<this.size){
  //       if(this.element == element){
  //         return i;
  //       }
  //       else{
  //         current = current.next;
  //         i++;
  //       }
  //     }
  //   }
  //   else{
  //     return null;
  //   }
  // }
  //
  // reverse(){
  //
  // }
  //
  // swap(nodeOne, nodeTwo){
  //
  // }
  //
  // isEmpty(){
  //   return this.size == 0;
  // }
  //
  // listSize(){
  //   console.log(this.size);
  // }
  //



}
