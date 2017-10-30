const sortStack = require('../implementation');

describe("sortStack", function() {
  it("returns empty stack when stack is empty", function() {
    const input = [];
    expect(sortStack([])).toEqual([]);
  });
});
