import { v4 as uuidv4 } from "uuid";
import Tree, { TreeRenderer, NewTree } from "./tree";

// let tree = new Tree();
let NODES = [
	40, 20, 80, 24, 53, 12, 65, 23, 45, 64, 21, 94, 82, 35, 72, 8, 7, 15, 37,
	27, 43, 56, 68, 34,
];
// const fixPos = 500;
// const posX = Math.floor(window.innerWidth / 2);
// const posY = 25;

// function initTree(nodes) {
//   nodes.forEach((node) => {
//     tree.add(node);
//   });
// }

// function generateFlowNodes(tree) {
//   const nodes = [];
//   const root = tree.root;
//   let level = 1;
//   traverse(root, level);
//   return nodes;

//   function traverse(node, level) {
//     if (!node) return;

//     traverse(node.left, level + 1);
//     nodes.push(generateNode(node, level));
//     traverse(node.right, level + 1);
//   }
// }

// function generateNodes(nodes) {
//   const genNodes = nodes.map((node) => {
//     return generateNode(node);
//   });
//   return genNodes;
// }

// function generateNode(node, level) {
//   const { value } = node;
//   const y = level * 40;
//   const x = 2 ** level * 10;
//   return {
//     id: uuidv4(),
//     type: "input",
//     data: { label: node.value },
//     position: { x, y },
//   };
// }

// export default function getNodes() {
//   debugger;
//   initTree(NODES);
//   //   const renderTree = new TreeRenderer(tree.root);
//   const nodes = generateFlowNodes(tree);
//   return nodes;
// }

let tree = new NewTree();
NODES.forEach((node) => tree.add(node));
tree.assignLevels();
let renderTree = new TreeRenderer(tree, 1000, 1000);
let nodes = generateRenderData(renderTree.getRenderTree());

debugger;
