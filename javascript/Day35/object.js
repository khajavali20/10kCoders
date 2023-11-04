// Assignment :
// 1. Document call by value and call by reference with examples 
// 2. var student1 = {
//   name: "Sai Teja",
//   dept: "CSE",
//    marks: [100, 52, 41, 30],

// };
// var student2 = {
//   name: "Manju",
//   dept: "CSE",
//   marks: [90, 23, 41, 30],
// };

// var student3 = {
//   name: "SaiKumar",
//   dept: "CSE",
//   marks: [30, 52, 15, 30],
// };

// i - Find avg marks of each student and add it as new property

// ii - Check if student is passed or failed(less than 35 in any subject)
// add new property passed/failed
// 3. How to print only object property names


console.log("object example");

var student = { 
    name: "kohli",
    dept: "EEE",
    marks: [100, 52, 41, 38]
};
var student1 = { 
    name: "Jadeja",
    dept: "EEE",
    marks: [90, 23, 41, 30]
};
var student2 = { 
    name: "Dhoni",
    dept: "EEE",
    marks: [30, 52, 15, 30]
};

function result(student) {
    console.log("Before Result");
    console.log(student);
    var marks = student.marks;
    var sum = 0;
    var result;
    for (i in marks) {
        if(marks[i] < 35) {
            result = "Fail";
            student.Result = result;
        } else {
            result = "Pass";
            student.Result = result;
        }

        sum += marks[i];
    }
    var res = sum/marks.length;
    student.Average = res;
    console.log("After Modified result");
    console.log(student);
}
result(student);
result(student1);
result(student2);

// for(i in mark) {
//     sum += mark[i];
     
// }
// var res = sum/mark.length; 
// console.log(res);
// student.Average = res;
// console.log(student);

