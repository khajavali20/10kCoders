// Problem of the day - Create a function that takes an array of non-negative integers and strings and returns a new array without the strings.

//  Example :

// filterArray([1, 2, "a", "b"]) ➞ [1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

//  Notes :

// 1.Zero is a non-negative integer.
// 2.The given array only has integers and strings.
// 3.Numbers in the array should not repeat.
// 4.The original order must be maintained.

let arr2 = [1, "a", "b", 0, 15];
let arr3 = [1, 2, "aasf", "1", "123", 123];
let arr = [1, 2, "a", "b"];

function filterNumber(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") res.push(arr[i]);
  }
  return res;
}
let ans = filterNumber(arr);
console.log(ans);

function filterNumber(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") res.push(arr[i]);
  }
  return res;
}
let ans1 = filterNumber(arr2);
console.log(ans1);
function filterNumber(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") res.push(arr[i]);
  }
  return res;
}
let ans2 = filterNumber(arr3);
console.log(ans2);
