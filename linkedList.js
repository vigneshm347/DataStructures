
class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    return this;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new NewNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length = this. length + 1;
    return this;

  }

  prepend(value) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
    }

    insert(index, value) {
      // if index is larger than length of linked list
      if(index >= this.length) {
        return this.append(value);
      } 

      const newNode = new NewNode(value);
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer; 
      this.length++;
    }

    remove(index) {
      const leader = this.traverseToIndex(index-1);
      const unWantedNode = leader.next;
      leader.next = unWantedNode.next;
      this.length--;

    }

    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index) {
        currentNode = currentNode.next;
        counter++; 
      }
      return currentNode;
    }

    printList() {
      const array = [];
      let currentNode = this.head;
      let counter = 0;
      let list = '';
      while(currentNode != null) {
        array.push({position: counter,value: currentNode.value});
        currentNode = currentNode.next;
        counter++;
      }
      array.map((node) => {
          list = list + node.value + '-->';
       
      })
      return list;
    }

    reverse(){
      if (!this.head.next) {
        return this.head;
      }
      let first = this.head;
      this.tail = this.head;
      let second = first.next;

      while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      this.head.next = null;
      this.head = first;
    }
}

const myLinkedList = new LinkedList(1);

myLinkedList.append(3);
myLinkedList.append(5);
myLinkedList.append(7);
myLinkedList.reverse();
// myLinkedList.insert(1, 2);
// myLinkedList.insert(3, 4);
// myLinkedList.insert(5, 6);
// myLinkedList.remove(5)
// myLinkedList.remove(1)
// myLinkedList.remove(3)
console.log(myLinkedList);


// Doubly Linked list starts

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      previous: null,
      value: value,
      next: null
    };
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      previous: null,
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    const newNode = {
      previous: null,
      value: value,
      next: null
    }

    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;
    this.length++;
    return this;

  }

  remove(index) {
    const leader = this.traverseToIndex(index-1);
    const toRemove = leader.next;
    leader.next = toRemove.next;
    this.length--;
    return this;
    


  }
  
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++; 
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    let counter = 0;
    let list = '';
    while(currentNode != null) {
      array.push({position: counter,value: currentNode.value});
      currentNode = currentNode.next;
      counter++;
    }
    array.map((node) => {
        list = list + node.value + '-->';
      
    })
    return list;
  }
}

// const myDoublyLinkedList = new DoublyLinkedList(1);
// myDoublyLinkedList.append(3);
// myDoublyLinkedList.append(5);
// myDoublyLinkedList.append(7);
// myDoublyLinkedList.insert(1, 2);
// myDoublyLinkedList.insert(3, 4);
// myDoublyLinkedList.insert(5, 6);
// myDoublyLinkedList.remove(5)
// myDoublyLinkedList.remove(1)
// myDoublyLinkedList.remove(3)
// console.log(myDoublyLinkedList.printList());