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

export function PropsNode(value, parent) {
	this.value = value === undefined ? "no value" : value;
	this.x = 0;
	this.y = 0;
	this.gap = 0;
	this.left = null;
	this.right = null;
	this.level = 0;
	this.parent = parent === undefined ? null : parent;
}

export class NewTree {
	constructor() {
		this.root = null;
		this.depth = 0;

		this.assingLevel = this.assingLevel.bind(this);
	}

	add(value) {
		let node = this.root;
		if (!node) {
			this.root = new PropsNode(value);
			return;
		}

		search(node);

		function search(node) {
			if (value < node.value) {
				if (!node.left) {
					node.left = new PropsNode(value, node);
					return;
				} else {
					return search(node.left);
				}
			}
			if (value > node.value) {
				if (!node.right) {
					node.right = new PropsNode(value, node);
					return;
				} else {
					return search(node.right);
				}
			}
			return;
		}
		//	this.assignLevels();
	}

	traverse(callback) {
		let node = this.root;
		helper(node, 1);

		function helper(node, level) {
			if (!node) return;
			helper(node.left, level + 1);
			helper(node.right, level + 1);
			if (callback) {
				callback(node, level);
			}
		}
	}
	assingLevel(node, level) {
		node.level = level;
		this.depth = Math.max(this.depth, level);
	}
	assignLevels() {
		this.traverse(this.assingLevel);
	}
}

export class TreeRenderer {
	constructor(dataTree, width, height, base = 60) {
		this.dataTree = dataTree;
		this.width = width;
		this.height = height;
		this.baseX = base;
		this.baseY = 200;
		this.init();
		this.assignXPos();
	}

	init() {
		let node = this.dataTree.root;
		const ctx = this;
		traverse(node);
		function traverse(node) {
			if (!node) return;
			traverse(node.left);
			traverse(node.right);
			node.y = node.level * ctx.baseY;
			if (node.parent) {
				node.parent.gap =
					(ctx.dataTree.depth - node.level + 4) * ctx.baseX;
			}
		}
	}

	getRenderTree() {
		return this.dataTree;
	}

	assignXPos() {
		let node = this.dataTree.root;
		node.x = 400;

		traverse(node, 400);

		function traverse(node, x) {
			if (!node) return;
			let { gap } = node;
			if (node.left) {
				node.left.x = x - gap / 2;
			}
			if (node.right) {
				node.right.x = x + gap / 2;
			}
			traverse(node.left, x - gap / 2);
			traverse(node.right, x + gap / 2);
		}
	}
}

const NODE_STEP = 400;
// export class TreeRenderer {
// 	constructor(
// 		dataRoot,
// 		width = window.innerWidth,
// 		height = window.innerHeight
// 	) {
// 		//root node of the tree (entry point)
// 		this.dataRoot = dataRoot;
// 		this.width = width;
// 		this.height = height;
// 		this.renderRoot = this.prepareData(this.dataRoot, 0, null);
// 		this.firstPass(this.renderRoot);
// 		this.deep = this.getDeep();
// 	}

// 	/*
// 	 * Build an intermediate form of the original data tree.  The nodes of
// 	 * this new tree will be instances of the TreeNode class.
// 	 */
// 	getDeep() {
// 		let deep = -Infinity;

// 		helper(this.renderRoot, 0);
// 		return deep;

// 		function helper(node, level) {
// 			deep = Math.max(deep, level);
// 			for (let i = 0; i < node.children.length; i++) {
// 				helper(node.children[i], level + 1);
// 			}
// 		}
// 	}
// 	prepareData(node, level, prevSibling) {
// 		let treeNode = new TreeNode(node.value);
// 		treeNode.y = level;
// 		treeNode.prevSibling = prevSibling;

// 		for (let i = 0; i < node.children.length; i++) {
// 			if (node.children[i]) {
// 				treeNode.children.push(
// 					this.prepareData(
// 						node.children[i],
// 						level + 200,
// 						i >= 1 ? treeNode.children[i - 1] : null
// 					)
// 				);
// 			}
// 		}
// 		return treeNode;
// 	}

// 	firstPass(node) {
// 		for (let i = 0; i < node.children.length; i++) {
// 			this.firstPass(node.children[i]);
// 		}

// 		node.x = node.prevSibling ? node.prevSibling.x + NODE_STEP : 0;

// 		if (node.children.length === 1) {
// 			node.modifier = node.x;
// 		} else if (node.children.length >= 2) {
// 			let minX = Infinity;
// 			let maxX = -minX;
// 			for (let i = 0; i < node.children.length; i++) {
// 				minX = Math.min(node.children[i].x, minX);
// 				maxX = Math.max(node.children[i].x, maxX);
// 			}
// 			node.modifier = node.x - (maxX - minX) / 2;
// 		}
// 	}

// 	secondPass(node, modSum) {
// 		node.final = node.x + modSum;
// 		for (let i = 0; i < node.children.length; i++) {
// 			this.secondPass(node.children[i], node.modifier + modSum);
// 		}
// 	}
// }
