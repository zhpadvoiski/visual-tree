import { NewNode, NewTree } from "../tree";

describe("tree", () => {
  describe("NewNode class", () => {
    const node = new NewNode();
    test("should be instance of NewNode class", () => {
      const mockResult = node instanceof NewNode;
      expect(mockResult).toBeTruthy();
    });
  });
});
