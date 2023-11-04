// Assignment :
// 1. Check for duplicates in an array ex-["a","b", "a", "c"], [1,8,21,5,21,4,8]
// 2. Remove all 0s from an array ex-[1,10,0,5,0,91,0]
// 3. Sort the array with student names
// 4. Design calculator app UI
// 5. Design TODO list UI(Input, add item, delete item)

console.log("Find duplicates........");
console.log("array is: ['a','b','a','c','a','b','d']");

var list = ["a", "b", "a", "c", "a", "b", "d"];
function check(list) {
  for (var i = 0; i < list.length; i++) {
    var count = 0;
    for (var j = i + 1; j < list.length; j++) {
      if (list[i] === list[j]) {
        count++;
      }
    }
    if (count > 0) {
      console.log(
        "the value: " + list[i] + " is duplicated " + count + " times"
      );
    }
  }
  if (count != 0) {
    console.log("no duplicates");
  }
}
check(list);

console.log("Find duplicates........");
console.log("array is: [1,8,21,5,21,4,8,21,9,12,8]");

var list = [1, 8, 21, 5, 21, 4, 8, 21, 9, 12, 8];
function check(list) {
  var istrue = false;
  for (var i = 0; i < list.length; i++) {
    var count = 0;
    for (var j = i + 1; j < list.length; j++) {
      if (list[i] === list[j]) {
        count++;
        istrue = true;
        console.log(
          "the value: " + list[i] + " is duplicated " + count + " times"
        );
      }
    }
  }
  if (!istrue) {
    console.log("no duplicates");
  }
}
check(list);

console.log("Remove all zeros from an array..........");
console.log("[1,10,0,5,0,91,0]");
var rem = [1, 10, 0, 5, 0, 91, 0];
function removeZero(rem) {
  var zero = rem;
  for (var i = 0; i < zero.length; i++) {
    if (zero[i] === 0) {
      zero.splice(i, 1);
    }
  }
  return zero;
}
var res = removeZero(rem);
console.log(res);

console.log("sort array with student names");

console.log(
  "['arjun', 'ravi', 'shannu', 'sheshu', 'puri', 'yashwanth', 'sunil']"
);

var names = ["arjun", "ravi", "shannu", "sheshu", "puri", "yashwanth", "sunil"];
function sorting(names) {
  names.sort();
  return names;
}
var res = sorting(names);
console.log(res);
