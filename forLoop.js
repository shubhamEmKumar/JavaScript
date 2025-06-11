
var arr1 = [1,2,3,4]

// normal for loop works

// different syntax
for(let value of arr1) {
    console.log(value);
}

for(let [index, value] of arr1.entries()) {
    console.log(index, value);
}