function Node(value, next) {
  this.value = value === undefined ? 0 : value;
  this.next = next === undefined ? null : value;
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.last = null;
  }

  #getLast() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  add(value) {
    let current = this.head;
    if (!this.head) {
      this.head = new Node(value);
      // this.last = this.head;
      return;
    } else {
      // this.last.next = new Node(value);
      // this.last = this.last.next;
      // return;
      let last = this.#getLast();
      last.next = new Node(value);
    }
  }

  reverse() {
    let current = this.head;
    let prev = null;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }
}

let list = new LinkedList();
