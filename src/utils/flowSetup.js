import { v4 as uuidv4 } from "uuid";

let NODES = [
  40, 20, 80, 24, 53, 12, 65, 23, 45, 64, 21, 94, 82, 35, 72, 8, 7, 15, 37, 27,
  43, 56, 68, 34,
];

function generateNodes(nodes) {
  const genNodes = nodes.map((node) => {
    return generateNode(node);
  });

  return genNodes;
}

// id: "1",
// type: "input", // input node
// data: { label: "Root" },
// position: { x: 250, y: 25 },
function generateNode(node) {
  return {
    id: uuidv4(),
    type: "input",
    data: { label: node.toString() },
    position: { x: 250, y: 25 },
  };
}

export function getNodes() {
  return generateNodes(NODES);
}
