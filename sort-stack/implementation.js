// sort a stack so that the smallest items are at the top. You may only use another stack and no other data structure.
const Stack = require('./stack');

const insertIntoSortedStack = function(sortedStack, unsortedStack, value) {
  if (sortedStack.size() === 0) {
    sortedStack.push(value);
    return;
  }

  let topValue = sortedStack.pop();
  while(value > topValue && topValue !== undefined) {
    unsortedStack.push(topValue);
    topValue = sortedStack.pop();
  }

  // need to put it back as we have been poppin
  if(topValue !== undefined) {
    sortedStack.push(topValue);
  }

  sortedStack.push(value);
}

const sortStack = function(unsortedStack) {
  if (unsortedStack.size() === 0 || unsortedStack.size() === 1) {
    return unsortedStack;
  }
  let sortedStack = new Stack();

  while(unsortedStack.size() !== 0) {
    const nextValue = unsortedStack.pop();

    insertIntoSortedStack(sortedStack, unsortedStack, nextValue);
  }

  return sortedStack
}

module.exports = sortStack;