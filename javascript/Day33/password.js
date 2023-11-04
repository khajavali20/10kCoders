// Assignment :
// 1. Check if password length is equal to 10 
// 2. Calculate prices in dollars and convert them to rupees.(with 2 decimals fixed)
// 3. Replace all spaces with comma in a string.
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore dignissimos, quia magni expedita laboriosam eos totam ipsa 

// 4. Document all number and string methods
// 5. Extract morning from a string - (Good morning. Have a beautiful morning.)


console.log("Checking the password length is equal to 10");
var pass = "Khaja@1234";
console.log("password is: " + pass);
password("Khaja@1234");
function password(p) {
     let pass = p;
     if (pass.length === 10) {
        console.log("password length is === 10");
     } else {
        console.log("password length is less than 10");
     }
}

console.log("Calculate prices in dollars & conversion");

var a = 83.28;
var f= a.toFixed(2);
var b = 0.012;
var res = (f *b).toFixed(2);
console.log("Price is: Rs: " + f +" "+ "In Dollars: "+ res+" $USD");

var dollar = 1.00;
var d = dollar.toFixed(2);
var rupee = 83.28;
var ans = (d * rupee).toFixed(2);
console.log("Dollar is: " + d +" $USD"+" "+ "In Price: Rs:"+ ans+"");


console.log("Replace space with  ,");
var space = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore dignissimos, quia magni expedita laboriosam eos totam ipsa";
var replace = space.replaceAll(" ", ",");
console.log(replace);


console.log("extract morning from string");
console.log("Good morning. Have a beautiful morning");
let m = "Good morning. Have a beautiful morning";
let k = m.replaceAll("morning", "");
console.log(k);