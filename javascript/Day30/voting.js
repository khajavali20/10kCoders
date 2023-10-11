console.log("...........Voting...........");
var a =15;
var b =20;
var c =17;
var d =30;


var e = "indian";
var f = "indian";
var g = "indian";
var h = "NewYork";

console.log("Ram age is: "+ a + " " +"nationality: " + e);
console.log("Rahim age is: "+ b + " " +"nationality: " + f);

if ((a >= 18 ) && (e === "indian") ) {
    console.log("Ram is " + "Eligible to vote" );
}
else if ((b >= 18 ) && (f === "indian")) {
    console.log(" Rahim is " + "Eligible to vote" );
}
else {
    console.log("Not eligible for vote due to less age or nationality...");
}




console.log("Robert age is: "+ c + " " +"nationality: " + g);
console.log("Mike age is: "+ d + " " +"nationality: " + h);

if ((c >= 18 ) && (g === "indian")) {
    console.log(" Robert is " + "Eligible to vote" );
}
else if ((d >= 18 ) && (h === "indian")) {
    console.log( "Mike is " + "Eligible to vote" );
}
else {
    console.log("No one Not eligible for vote due to less age or nationality...");
}