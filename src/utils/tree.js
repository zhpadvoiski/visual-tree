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

export function TreeNode(value) {
  this.value = value === undefined ? "no value" : value;
  this.x = 0;
  this.y = 0;
  this.prevSibling = null;
  this.children = [];
}
// export class NewTree {
//   constructor() {
//     this.root = null;
//   }

//   add(value) {
//     let node = this.root;
//     if (!node) {
//       this.root = new NewTree(value);
//       return;
//     }

//     search(node);

//     function search(node) {
//       if (value < node.value) {
//         if (!node.children[0]) {
//           debugger;
//           node.children[0] = new NewTree(value);
//           return;
//         } else {
//           return search(node.children[0]);
//         }
//       }
//       if (value > node.value) {
//         if (!node.children[1]) {
//           node.children[1] = new NewTree(value);
//           return;
//         } else {
//           return search(node.children[1]);
//         }
//       }
//       return;
//     }
//   }
// }
const NODE_STEP = 70;
class TreeRenderer {
  constructor(
    dataRoot,
    width = window.innerWidth,
    height = window.innerHeight
  ) {
    //root node of the tree (entry point)
    this.dataRoot = dataRoot;
    this.width = width;
    this.height = height;
    this.renderRoot = this.prepareData(this.dataRoot, 0, null);
  }

  /*
   * Build an intermediate form of the original data tree.  The nodes of
   * this new tree will be instances of the TreeNode class.
   */
  prepareData(node, level, prevSibling) {
    let treeNode = new TreeNode(node.value);
    treeNode.x = level;
    treeNode.prevSibling = prevSibling;

    for (let i = 0; i < node.children.length; i++) {
      treeNode.children.push(
        this.prepareData(
          node.children[i],
          level + 1,
          i >= 1 ? treeNode.children[i - 1] : null
        )
      );
    }
    return treeNode;
  }

  firstPass(node) {
    for (let i = 0; i < node.children.length; i++) {
      this.firstPass(node.children[i]);
    }

    node.y = node.prevSibling ? node.prevSibling.y + NODE_STEP : 0;

    if (node.children.length === 1) {
      node.modifier = node.y;
    } else if (node.children.length >= 2) {
      let minX = Infinity;
      let maxX = -minX;
      for (let i = 0; i < node.children.length; i++) {
        minX = Math.min(node.children[i], minX);
        maxX = Math.max(node.children[i], maxX);
      }
      node.modifier = node.y - (maxX - minX) / 2;
    }
  }
}
