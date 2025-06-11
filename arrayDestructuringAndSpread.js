
const [x1, x2, x3, ...remainingArr] = [1,2,3,4,5]

console.log(x1, x2, x3, remainingArr)

// points to same array
const arr1 = [1, 2, 3]
const arr2 = arr1

arr2.push("hi")

console.log(arr1, arr2)

// copy of arr1 (not refrencing &  arr1)

const arr3 = [...arr1]

arr3.push("shubham")

console.log(arr1, arr3)

// spread operator for adding another array to some array

const arr4 = [12, 34, ...arr1]

console.log(arr4)