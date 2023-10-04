document.write("<h1>Arithmetic Operations</h1>");

 a=20;
 b=2;

console.log("a = 20")
console.log("b = 2")
// Addition
console.log("Addition")
console.log("a+b=" + (a+b));

// Subtraction
console.log("Subtraction")
console.log("a-b="+ (a-b));

// multiplication 
console.log("multiplication")
console.log("a*b="+ (a*b));

//Division 
console.log("Division")
console.log("a/b="+ (a/b));

// Modulus 
console.log("Modulus")
console.log("a%b="+ (a%b));


// conversion 

console.log("****Type Conversions****")
console.log("#####################################################################################")
console.log("Convert  numbers to string & boolean")
var a = 10;
console.log("Number to String");
console.log("key:" + a + "," +  "type: " + typeof a);
console.log("key:" + String(a) + "," +  "type: " + typeof String(a));

var b= 20;
console.log("Number to Boolean")
console.log("key:" + b + "," +  "type: " + typeof b);
console.log("key:" + Boolean(b) + "," +  "type: " + typeof Boolean(b));

console.log("Convert  string to numbers & boolean")

var a = "hi";
console.log("String to Number");
console.log("key:" + a + "," +  "type: " + typeof a);
console.log("key:" + Number(a) + "," +  "type: " + typeof Number(a));

var b = "hello"
console.log("String to Boolean")
console.log("key:" + b + "," +  "type: " + typeof b);
console.log("key:" + Boolean(b) + "," +  "type: " + typeof Boolean(b));


console.log("Convert  boolean to string & numbers")

var a = true;
console.log("Boolean to String");
console.log("key:" + a + "," +  "type: " + typeof a);
console.log("key:" + String(a) + "," +  "type: " + typeof String(a));

var b= false;
console.log("Boolean to Numbers")
console.log("key:" + b + "," +  "type: " + typeof b);
console.log("key:" + Number(b) + "," +  "type: " + typeof Number(b));
