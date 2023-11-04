// Assignment:
// 1. var student = {
//   telugu: 100,
//   hindi: 50,
//   english: 90,
//   maths: 100,
//   science: 20,
//   social: 10,
// };

// Display in which subject student is passed and in which subject he is failed.
// Using for, for of and for in

// o/p -
// Passed subjects - telugu, hindi, english, maths
// Failed subjects - science, social

// 2. Practice basic problem solving challenges from hackerrank/leetcode/codechef

console.log("Subjects fail or pass");
var student = {
  telugu: 100,
  hindi: 50,
  english: 90,
  maths: 100,
  science: 20,
  social: 10,
};

console.log("Using for in Loop............");
function subject(student) {
  var res = [];
  var res2 = [];
  for (var i in student) {
    if (student[i] > 35) {
      res.push(i);
    } else {
      res2.push(i);
    }
  }
  console.log("Passed subjects - " + res.join(", "));
  console.log("Failed subjects - " + res2.join(", "));
}
subject(student);

console.log("Using for of Loop............");
function subject2(student) {
  var pass = [];
  var fail = [];
  var subjects = Object.entries(student);
  for (var [subject, marks] of subjects) {
    if (marks > 35) {
      pass.push(subject);
    } else {
      fail.push(subject);
    }
  }
  console.log("Passed Subject - " + pass.join(", "));
  console.log("Failed Subject - " + fail.join(", "));
}
subject2(student);

console.log("Using for loop..................");
function subject3(student) {
  var pass = [];
  var fail = [];
  var subjects = Object.keys(student);
  var marks = Object.values(student);
  for (var i = 0; i < subjects.length; i++) {
    if (marks[i] > 35) {
      pass.push(subjects[i]);
    } else {
      fail.push(subjects[i]);
    }
  }
  console.log("Passed Subject - " + pass.join(", "));
  console.log("Failed Subject - " + fail.join(", "));
}
subject3(student);


var n= 100;
var count=0;
for(var i=2;i<=n;i++) {
var flag = true;
    for(var j=2;j<i/2;j++) {
        if(i%j ==0) {
            flag = false;
            break;
        }
    }
if (flag == true ) {
    count++;
    console.log(i);
}
} 
console.log(count);

