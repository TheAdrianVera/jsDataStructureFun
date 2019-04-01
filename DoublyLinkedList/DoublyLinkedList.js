import Node from './DoublyLinkedListNode.js'

class DoublyLinkedList{
	constructor(){
		this.head=null;
		this.tail=null;
	}

	//appends item to DoublyLinkedList
	append(item){
		//initializes node with null next & prev
		let node= new Node(item);
		// if list empty, make node head and tail
		if(!this.head){
			this.head = node;
			this.tail = node;
		}else
			//this.tail is pointing to the current tail Node
			//we are now pointings out inserted Node's prev to this.tail rather than Null
			node.prev = this.tail;
			//changing current tail node to point to our inserted Node
			this.tail.next = node;
			//now that our node fits the criteria, this.tail is pointing to our inserted Node
			this.tail = node;
		}
	}

	//----------------------------------
	appendAt(position, item){
		let current = this.head;
		let i = 1;
		let node = new Node(item);
		//if adding to the beginning of DoublyLinkedList
		if(position == 0){
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}else{
			while(current){
				current = current.next;
				if(current.data = position){
					node.prev = current.prev;
					current.prev.next = node;
					node.next = current;
					current.prev = node;
				}
				i++;
			}
		}
	}

	remove(data){
		let current = this.head;
		while(current){
			if(current.data === data){
				//if removing DoublyLinkedList with one node
				if(current == this.head && current == this.tail){
					this.head = null;
					this.tail = null;
				}//we are removing the head
				else if (current == this.head){
					this.head = this.head.next;
					this.head.prev = null;
				}//we are removing the tail
				else if (current == this.tail){
					this.tail = this.tail.prev;
					this.tail.next = null;
				}//removing any other node
				else{
					current.prev.next = current.next;
					current.next.prev = current.prev;
				}
			}
			current = current.next;
		}
	}


	removeAt(position){
		let current = this.head;
		let i = 1;
		if(position == 0){
			this.head = this.head.next
			this.head.prev = null;
		}else{
			while(current){
				//moving over to next Node
				current = current.next;
				//if we are removing the tail
				if(current == this.tail){
					this.tail = this.tail.prev;
					this.tail.next = null;
				} //if we are removing any other index
				else if(counter==position){
					current.prev.next = current.next;
					current.next.prev = current.prev;
					break;
				}else{
					counter++;
				}
			}
		}
	}


	reverse(){
		let temp = null;
		let current = this.head;

		while(current){
			//have temp hold prev value
			let temp = current.prev;
			//swap prev with the next value
			current.prev = current.next;
			//swap next with prev value that's help in temp
			current.next = temp;
			//move current to next node in DoublyLinkedList
			current = current.next;
		}
		//Time the change the head
		//checking for empty DoublyLinkedList or DoublyLinkedList with one Node
		if(temp!null){
			head = temp.prev;
		}
	}

	swap(nodeOne, nodeTwo){
    if(nodeOne == nodeTwo){
      console.log("Nodes must be different to swap")
      break;
    }

	}

	length(){
	}


	isEmpty(){
	}
	traverse(){
	}
	traverseReverse(){
	}
}
