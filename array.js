// ==========================================
// JavaScript Array Tutorial
// ==========================================

// 1. Array Creation
// Different ways to create arrays in JavaScript
const arr = [1, 2, 3, true];   // Array literal - can contain mixed types
const arr2 = new Array(5);     // Creates an empty array with length 5
const arr3 = Array.from("hello");  // Creates array from iterable (string here)

// 2. Basic Array Modifications
// Arrays declared with const can still be modified (just can't be reassigned)
arr[1] = 54;  // Modifying element at index 1

// 3. Stack Operations (LIFO - Last In First Out)
arr.push(7);             // Adds element to the end
const poppedItem = arr.pop();  // Removes and returns last element
console.log(poppedItem);       // Shows the removed element

// 4. Array Properties
console.log(arr3.length);    // Gets array length (Note: size() doesn't exist in JS)

// 5. Queue Operations (FIFO - First In First Out)
arr.shift();     // Removes and returns first element
arr.unshift("hi");  // Adds element to the beginning

console.log(arr);

// 6. Searching Elements
// Modern ways to find elements in arrays
console.log(arr3.indexOf('o'));    // Returns index of element, -1 if not found
console.log(arr3.includes('o'));   // Returns true/false if element exists

// 7. Array Operations
// Combining arrays
const arr4 = arr.concat(arr3);  // Merges two arrays
console.log(arr4);

// Converting array to string
const str3 = arr.join('#');  // Creates string with '#' as separator
console.log(str3);

// 8. Array Slicing
// Extract portion of array (non-destructive)
const arr6 = arr.slice(2, 3);  // Gets elements from index 2 (inclusive) to 3 (exclusive)
console.log(arr6);
