function nextInLine(arr, item) {
  // Your code here
  
  testArr.push(6);
  testArr.shift();
  return testArr.shift();  // Change this line
}


// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));