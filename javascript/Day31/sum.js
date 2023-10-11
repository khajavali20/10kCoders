console.log("sum of first natural number");
var b =0;
for(let a = 1; a<=20; a++) {
      b += a;  
}
console.log(b);


console.log("factorial of 5");

var khaja =5;
var k =1;
for(let a =1; a<=khaja; a++) {
    k*=a;
}
console.log(k);


console.log("prime number or not")

let data = 5;
let isPrime = true;
if (data === 1) {
    console.log("it is not a prime number");
} else if (data > 1) {
    for(let i =2; i<data; i++) {
        if (data%i == 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        console.log(` ${data}  is a prime number`);
    } else {
        console.log(` ${data}  is not a prime number`);
    }
} else {
    console.log("The number is not a prime number.");
}
 


let ans = 6;
let prime = false;

if ( ans <1) {
    console.log("it is not prime");
} else if (ans >1) {
    for(let i=2; i<ans; i++) {
        if( ans % i == 0) {
            prime = true;
            break;
        }
    }

    if (!prime) {
        console.log("it is prime");
    } else {
        console.log("it is  not prime");
    }
}
 
