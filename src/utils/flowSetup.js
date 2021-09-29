import { v4 as uuidv4 } from "uuid";
import Tree from "./tree";

let tree = new Tree();
let NODES = [
  40, 20, 80, 24, 53, 12, 65, 23, 45, 64, 21, 94, 82, 35, 72, 8, 7, 15, 37, 27,
  43, 56, 68, 34,
];
const fixPos = 500;
const posX = Math.floor(window.innerWidth / 2);
const posY = 25;

function initTree(nodes) {
  nodes.forEach((node) => {
    tree.add(node);
  });
}

function generateFlowNodes(tree) {
  const nodes = [];
  const root = tree.root;
  let level = 1;
  traverse(root, posX, posY, level);
  return nodes;

  function traverse(node, posX, posY, level) {
    if (!node) return;

    traverse(node.left, posX - fixPos / 2 ** level, posY + fixPos, level + 1);
    nodes.push(generateNode(node, posX, posY));
    traverse(node.right, posX + fixPos / 2 ** level, posY + fixPos, level + 1);
  }
}

function generateNodes(nodes) {
  const genNodes = nodes.map((node) => {
    return generateNode(node);
  });
  return genNodes;
}

function generateNode(node, x, y) {
  return {
    id: uuidv4(),
    type: "input",
    data: { label: node.value },
    position: { x, y },
  };
}

export default function getNodes() {
  debugger;
  initTree(NODES);
  return generateFlowNodes(tree);
}
