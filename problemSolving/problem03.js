// Problem of the day -

// [1,3,4,7,6]

// [2,8,4,7,7]

// Write a logic to remove matching number in above 2 arrays, and output will be like below?

// Output:

// [1,3,6]
// [2,8]

let arr1 = [1, 3, 4, 7, 6];
let arr2 = [2, 8, 4, 7, 7];

console.log("arr1 = [1, 3, 4, 7, 6];");
console.log("arr2 = [2, 8, 4, 7, 7];");

let set1 = new Set(arr1);
let set2 = new Set(arr2);
ans1 = [];
ans2 = [];
for (let value of set1) {
  if (!set2.has(value)) ans1.push(value);
}
for (let value of set2) {
  if (!set1.has(value)) ans2.push(value);
}
console.log(ans1);
console.log(ans2);

res = [];

for (let i = 0; i < arr1.length; i++) {
  let isMatch = false;
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] == arr2[i]) {
      isMatch = true;
      break;
    }
  }
  !isMatch ? res.push(arr1[i]) : " ";
}
console.log(res);
