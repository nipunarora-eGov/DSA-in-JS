class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    
    if (index === 0) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) this.tail = newNode;
      this.length++;
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    const newNode = new Node(value);
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  pop() {
    //we need to have a pointer to last second element of the LL so that's why we need to iterate
    //edge case -> if ll is empty , if ll has only one element
    if (!this.head) {
      return this;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let iterator = this.head;
      while (iterator.next !== this.tail) {
        iterator = iterator.next;
      }
      // now iterator.next is the last element
      this.tail = iterator;
      iterator.next = null;
      this.length--;
    }
    return this;
  }
}

const ll = new LinkedList(10);
ll.push(20);
ll.push(30);
ll.push(40);
ll.pop();
