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

describe("tree", () => {
  describe("Tree class", () => {
    const tree = new NewTree();

    describe("add functionality", () => {
      test("should add node to the root", () => {
        const testValue = 20;
        tree.add(testValue);
        expect(tree.root.value).toBe(testValue);
      });
      test("should add node to the left (children[0])", () => {
        debugger;
        const testValue = 10;
        tree.add(testValue);
        expect(tree.root.children[0].value).toBe(testValue);
      });
      test("should add node to the right (children[1])", () => {
        const testValue = 40;
        tree.add(testValue);
        expect(tree.root.children[1].value).toBe(testValue);
      });
    });
  });
});
