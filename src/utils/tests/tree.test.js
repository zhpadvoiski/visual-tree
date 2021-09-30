import { NewNode, NewTree } from "../tree";

describe("node", () => {
  describe("NewNode class", () => {
    const node = new NewNode();
    test("should be instance of NewNode class", () => {
      const mockResult = node instanceof NewNode;
      expect(mockResult).toBeTruthy();
    });
    test("should have link to the new node in children", () => {
      node.children[0] = new NewNode(9);
      expect(node.children[0].value).toBe(9);
    });
  });
});
