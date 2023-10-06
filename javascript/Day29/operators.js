document.write("<h1>Operators in Javascript</h1>");

document.writeln(
    "<h4>Arithmetic Operators:</h4>",
    "`+ ` (Addition): Adds two numbers. <b>10 + 5 = 15</b><br>",
    "`-`  (Subtraction): Subtracts the second number from the first. <b>10 - 5 = 5</b> <br>",
    "`*`  (Multiplication): Multiplies two numbers. <b>10 * 5 = 50</b> <br>",
    "`/`  (Division): Divides the first number by the second. <b>10/5 = 2</b> <br>",
    "`%`  (Modulus): Returns the remainder of division. <b>10%5 = 0</b> <br>",
    "`++` (Increment): Increases a variable's value by 1. <br>",
    "`--` (Decrement): Decreases a variable's value by 1. <br> "
);
document.writeln(
    "<b>var a=10; <br>", 
"var b=5; <br>",
"console.log(a) = 10; <br>",
"console.log(a++) = 10; <br>",
"console.log(a) = 11; <br>",
"console.log(b--) = 5; <br>",
"console.log(b) = 4; <br></b>"
);

document.writeln(
    "<h4>Assignment Operators:</h4>",
    "`=`(Assignment): Assigns a value to a variable. <b></b> <br>",
    "`+=` (Addition Assignment): Adds and assigns the result to a variable. <b></b> <br>",
    "`-=` (Subtraction Assignment): Subtracts and assigns the result to a variable. <b></b> <br>",
    "`*=` (Multiplication Assignment): Multiplies and assigns the result to a variable. <b></b> <br>",
    "`/=` (Division Assignment): Divides and assigns the result to a variable. <b></b> <br>",
    "`%=` (Modulus Assignment): Performs modulus and assigns the result to a variable. <b></b> <br>"
);

document.writeln(
    "<b>var x=20; <br>",
    "var y=30; <br>",
    "y -= 15; => 15 <br>",
    "x += 10; => 30 <br>",
    "Remaining also shown as above it works...</b>"
)

document.writeln(
    "<h4>Comparison Operators:</h4>",
    "`==`    (Equality): Compares if two values are equal. <br>",
    "`===`   (Strict Equality): Compares if two values are equal in both value and data type. <br>",
    "`!=`    (Inequality): Compares if two values are not equal. <br>",
    "`!==`   (Strict Inequality): Compares if two values are not equal in value or data type. <br>",
    "`> `    (Greater Than): Checks if the left operand is greater than the right operand. <br>",
    "`< `    (Less Than): Checks if the left operand is less than the right operand. <br>",
    "`>=`    (Greater Than or Equal To): Checks if the left operand is greater than or equal to the right operand. <br>",
    "`<=`    (Less Than or Equal To): Checks if the left operand is less than or equal to the right operand. <br>"
);

document.writeln(
    "<b>var num1 = 5; <br>",
    "var num2 = 10; <br>",
    
    "console.log(num1 == num2);  // false <br>",
    "console.log(num1 != num2);  // true <br>",
    "console.log(num1 < num2);   // true <br>",
    "console.log(num1 > num2);   // false <br>",
    "console.log(num1 <= num2);  // true <br>",
    "console.log(num1 >= num2);  // false <br>",
    "console.log(num1 === num2);  // false <br>",
    "console.log(num1 !== num2);  // true <br> </b>"
)


document.writeln(
    "<h4>Logical Operators:</h4>",
    "`&&` (Logical AND): Returns true if both operands are true. <br>",
    "`||` (Logical OR): Returns true if at least one operand is true. <br>",
    "`!`  (Logical NOT): Returns the opposite boolean value of the operand. <br>"
);

document.writeln(
    "<b>var isTrue = true; <br>",
    "var isFalse = false; <br>",
    
    "console.log(isTrue && isFalse); // false <br>",
    "console.log(isTrue || isFalse); // true <br>",
    "console.log(!isTrue);           // false <br></b>"
)

document.writeln(
    "<h4>Ternary Operator (Conditional Operator):</h4> ",
    "condition ? value_if_true : value_if_false <br> Evaluates a condition and returns one of two values based on whether the condition is true or false."
);

document.writeln(
    "<h4>Bitwise Operators:</h4>",
    "`&`(Bitwise AND): Performs a bitwise AND operation. <br>",
    "`|`(Bitwise OR): Performs a bitwise OR operation. <br>",
    "`^`(Bitwise XOR): Performs a bitwise XOR (exclusive OR) operation. <br>",
    "`~`(Bitwise NOT): Inverts the bits of a number. <br>",
    "`<<` (Left Shift): Shifts bits to the left. <br>",
    "`>>` (Right Shift): Shifts bits to the right. <br>",
);

document.writeln(
"<b>var a = 5;   // Binary: 0101 <br>",
"var b = 3;   // Binary: 0011 <br>",
"var bitwiseAnd = a & b; => 0001 (Decimal: 1) <br>",
"var bitwiseOr = a | b;  => 0111 (Decimal: 7) <br>",
"var bitwiseXor = a ^ b; => 0101 (Decimal: 6) <br>",
"var leftShift = a >> 2; => 0101 => 010100 (Decimal: 20) <br>",
"var rightShift = a << 1; => 010100 => 0101 (Decimal: 5) <br></b>"
);