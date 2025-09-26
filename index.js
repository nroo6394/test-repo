/**
 * Simple test application
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  subtract,
  multiply
};

// Example usage
if (require.main === module) {
  console.log('2 + 3 =', add(2, 3));
  console.log('5 - 3 =', subtract(5, 3));
  console.log('4 * 7 =', multiply(4, 7));
}