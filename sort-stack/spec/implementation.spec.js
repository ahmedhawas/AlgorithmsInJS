const sortStack = require('../implementation');
const Stack = require('../stack');

const insertIntoStack = function(listItems, stack) {
  listItems.forEach((item) => {
    stack.push(item);
  });
}

describe("sortStack", function() {
  it("returns empty stack when stack is empty", function() {
    const input = new Stack();

    expect(sortStack(input)).toEqual(input);
  });

  it("returns the same stack if it there is one element", function() {
    const input = new Stack();
    insertIntoStack([1], input);

    expect(sortStack(input)).toEqual(input);
  });

  it("returns the sorted stack if the stack is not ordered", function() {
    const input = new Stack();
    insertIntoStack([1, 3, 2], input);

    const expectedStack = new Stack();
    insertIntoStack([3, 2, 1], expectedStack);

    const result = sortStack(input);
    expect(result).toEqual(expectedStack);
  });

  it("returns the sorted stack if the stack is reversed", function() {
    const input = new Stack();
    insertIntoStack([1,2,3,4,5,6,7,8,9,10], input);

    const expectedStack = new Stack();
    insertIntoStack([10,9,8,7,6,5,4,3,2,1], expectedStack);

    const result = sortStack(input);
    expect(result).toEqual(expectedStack);
  });

  it("returns the sorted stack if it has negative numbers", function() {
    const input = new Stack();
    insertIntoStack([-3,-20, 8, 10], input);

    const expectedStack = new Stack();
    insertIntoStack([10, 8, -3, -20], expectedStack);

    const result = sortStack(input);
    expect(result).toEqual(expectedStack);
  });

  it("returns the sorted stack if the stack is random and larger than 100 elements", function() {
    const input = new Stack();
    const arrayInput = [
      88,34,60,42,19,
      81,38,95,44,70,
      28,63,13,13,84,
      90,84,33,61,65,
      50,92,11,38,90,
      51,68,14,73,47,
      31,76,22,97,52,
      25,20,90,28,34,
      60,41,42,65,41,
      23,33,78,86,63,
      79,81,83,41,35,
      61,15,-47,15,47,
      99,	6,89,68,77,
      67,30,66,56,56,
      49,49,18,68,88,
      36,91,22,58,38,
      100,55,59,68,6,
      67,43,60,3,6,
      48,66,24,35,52,
      45,15,85,94,12,
    ]
    insertIntoStack(arrayInput, input);

    const sortedArray = arrayInput.sort(function(a,b) { return a - b }).reverse();
    const expectedStack = new Stack();
    insertIntoStack(sortedArray, expectedStack);

    const result = sortStack(input);
    expect(result).toEqual(expectedStack);
  });
});
