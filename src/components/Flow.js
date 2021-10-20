import ReactFlow, { Background } from "react-flow-renderer";
import getNodes from "../utils/flowSetup";
import { useEffect, useState } from "react";

// const elements = [
//   {
//     id: "1",
//     type: "input", // input node
//     data: { label: "Root" },
//     position: { x: 250, y: 25 },
//   },
//   // default node
//   {
//     id: "2",
//     // you can also pass a React component as a label
//     data: { label: <div>Default Node</div> },
//     position: { x: 100, y: 125 },
//   },
//   {
//     id: "3",
//     type: "output", // output node
//     data: { label: "Output Node" },
//     position: { x: 250, y: 250 },
//   },
//   // animated edge
//   { id: "e1-2", source: "1", target: "2", animated: true },
//   { id: "e2-3", source: "2", target: "3" },
// ];

const FlowWithBackground = () => {
	const [nodes, setNodes] = useState();

	useEffect(() => {
		setNodes(getNodes());
	}, []);
	return nodes ? (
		<ReactFlow elements={nodes}>
			<Background variant="dots" gap={14} size={0.5} />
		</ReactFlow>
	) : null;
};

export default FlowWithBackground;
