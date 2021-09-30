function Node(value, left, right) {
  this.value = value === undefined ? null : value;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

export default class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = this.root;
    if (!node) {
      this.root = new Node(value);
      return;
    }

    search(node);

    function search(node) {
      if (value < node.value) {
        if (!node.left) {
          node.left = new Node(value);
          return;
        } else {
          return search(node.left);
        }
      }
      if (value > node.value) {
        if (!node.right) {
          node.right = new Node(value);
          return;
        } else {
          return search(node.right);
        }
      }
      return;
    }
  }
}

export function NewNode(value) {
  this.value = value === undefined ? "no value" : value;
  this.children = [];
}
export class NewTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = this.root;
    if (!node) {
      this.root = new NewNode(value);
      return;
    }

    search(node);

    function search(node) {
      if (value < node.value) {
        if (!node.children[0]) {
          debugger;
          node.children[0] = new NewNode(value);
          return;
        } else {
          return search(node.children[0]);
        }
      }
      if (value > node.value) {
        if (!node.children[1]) {
          node.children[1] = new NewNode(value);
          return;
        } else {
          return search(node.children[1]);
        }
      }
      return;
    }
  }
}
