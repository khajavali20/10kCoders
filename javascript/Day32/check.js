console.log("Check if a number has 0 or not");
console.log("200");

function zeroOrNot(a) {
  var count = 0;
  var res = a;
  while (res > 0) {
    var ans = res % 10;
    if (ans === 0) {
      count++;
    }

    res = parseInt(res / 10);
  }

  if (count === 0) {
    console.log("Number is no zeros");
  } else {
    console.log("number is having:" + count + " zeros");
  }
}
zeroOrNot(200);

console.log("ArmStrong Number");
console.log("153");
function armStrong(n) {
  var num = n;
  var res = 0;
  while (num > 0) {
    var ans = num % 10;
    res += ans * ans * ans;
    num = num / 10;
  }
  if (num === res) {
    console.log("it is armstrong");
  } else {
    console.log("it is armstrong");
  }
}
armStrong(153);

console.log("Voting");
console.log("16, Indian");
console.log("Age limit is >=18");
console.log("Voter must be Indian");

function voting(n, s) {
  var num = n;

  if (num >= 18 && s == "Indian") {
    console.log("Your eligible to vote");
  } else {
    console.log("Your not eligible to vote");
  }
}
voting(16, "Indian");

console.log("Print all prime numbers from 1 to 20");
console.log("1, 20");
function printNumbers(k, n) {
  var count = 0;

  for (let i = k; i <= n; i++) {
    if (i % 2 == 0) {
      count++;
    }
    //console.log(i)
    if (count === 0) {
      console.log(i);
    }
  }
}

printNumbers(1, 20);


var num = 153;
var num2 = num.toString();
var sum  =0;

for(let a=0; a<num2.length; a++) {
    debugger;
    let number = parseInt(num2[a]);
    sum += Math.pow(number, num2.length);
}
console.log(sum);
