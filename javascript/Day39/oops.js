// 1. write a js program regular expression for IPV4 address;
// 2. regular expression for phone Number
// 3.regular expression check for password(facebook, gmail)
// 4.module both export and named
// 5.create a class add a new array into the class, add method,delete method , get method

console.log("Checking the Ipv4 Address");
console.log("192.168.1.113");
console.log("khaja.vali.0.06");
function checkIpv4(input) {
  let pattern =
    /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (input.match(pattern)) console.log("it is valid");
  else console.log("it is not valid");
}
checkIpv4("192.168.1.113");
checkIpv4("khaja.vali.0.06");

console.log("Checking Password");
console.log("Test@1234");
console.log("test1234");

function checkPassword(input) {
  let password =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*+-/><.,~]).{8,16}$/;

  if (input.match(password)) console.log("Valid Password ");
  else console.log("Password is not strong");
}
checkPassword("Test@1234");
checkPassword("test1234");

console.log("Checking Phone Number");
console.log("9876543210");
console.log("874222555");

export default function checkPhoneNumber(input) {
  let phoneNumber = /^\d{10}$/;
  if (input.match(phoneNumber)) console.log("Valid Phone Number");
  else console.log("Invalid Phone Number");
}
checkPhoneNumber("9876543210");
checkPhoneNumber("874222555");

import { khaja } from "../Day40/module.js";
import khajavali from "../Day40/module.js";

console.log(`import { khaja } from "../Day40/module.js";
import khajavali from "../Day40/module.js";
`);

khaja();

khajavali();

console.log("Creating a Class ");
class Khaja {
  constructor() {
    this.arr = [];
  }

  add(input) {
    this.arr.push(input);
  }

  delete(input) {
    let res = this.arr.indexOf(input);
    if (res !== -1) this.arr.splice(res, 1);
  }

  get() {
    return this.arr;
  }
}
console.log(`vali.add(1);
vali.add(2);
vali.add(3);
vali.delete(3);
vali.get();
`);

let vali = new Khaja();

vali.add(1);
vali.add(2);
vali.add(3);
vali.delete(3);
console.log(vali.get());
