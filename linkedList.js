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
}

const myLinkedList = new LinkedList(10);
const myNewNode = new NewNode(10);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.append(16);
myLinkedList.prepend(0.5);
console.log(myLinkedList);