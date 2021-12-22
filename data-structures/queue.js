class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last  = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }

  incrementSize() {
    this.size = this.size + 1;
  }

  derementSize() {
    this.size = this.size - 1;
  }

  enqueue(value) {
    let oldLast = this.last;
    this.last = new QueueNode(value);

    if (this.isEmpty()) this.first = this.last;
    else oldLast.next = this.last;
    
    this.incrementSize();
  }

  dequeue() {
    if (this.isEmpty()) {
      this.last = null;
      return null;
    }

    let itemValue = this.first.value;
    this.first = this.first.next;

    this.derementSize();
    return itemValue; 
  }
}