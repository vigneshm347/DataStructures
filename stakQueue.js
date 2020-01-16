class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const newItem = new Node(value);
    if(this.length <= 0) {
      this.top = newItem;
      this.bottom = newItem;
      
    } else {
      const topNode = this.top;
      newItem.next = topNode;
      this.top = newItem;

    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.top){
      return null;
    }

    if(this.top === this.bottom) {
      this.top = null
      return this;
    }
    const topNode = this.top;
    this.top = topNode.next;
    this.length--;
    return this;
  }

   printList() {
      const array = [];
      let currentNode = this.top;
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

  //isEmpty
}

// const myStack = new Stack();
// myStack.push(10);

// console.log(myStack.pop());
// // console.log(myStack.peek());



// Using LinkedList for Queue

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value){
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;

  }
  dequeue(){
    if(!this.first) {
      return null;
    } 
    if(this.first === this.last) {
      this.last = null;

    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

// const myQueue = new Queue();
// myQueue.enqueue('Vicky');
// myQueue.enqueue('Vignesh');
// myQueue.enqueue('Buchi');
// myQueue.enqueue('Sona');
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
// console.log(myQueue.dequeue())



class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);

    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
myQueue.peek();