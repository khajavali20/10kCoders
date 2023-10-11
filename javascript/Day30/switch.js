document.write("<h1>Calculator Operations</h1>")

var a =20;
var b = 10;
document.writeln("var a ="+ a + "<br>");
document.writeln("var b ="+ b + "<br>");

var  operation = prompt("choose your operation name (addition, subtraction, multiplication, division, modulus)")
var result ;

switch ( operation) {
    case 'addition': 
    result = a+b;
    document.writeln("<h3>You choose Addition Operation</h3>")
    document.writeln("The result is:" + result);
    break;
    case 'subtraction': 
    result = a-b;
    document.writeln("<h3>You choose subtraction Operation</h3>")
    document.writeln("The result is:" + result );
    break;
    case 'multiplication': 
    result = a*b;
    document.writeln("<h3>You choose multiplication Operation</h3>")
    document.writeln("The result is:" + result);
    break;
    case 'division': 
    result = a/b;
    document.writeln("<h3>You choose division Operation</h3>")
    document.writeln("The result is:" + result );
    break;
    case 'modulus': 
    result = a%b;
    document.writeln("<h3>You choose Modulus Operation</h3>")
    document.writeln("The result is:" + result);
    break;
    default: 
    result = "Invalid Operation"
    document.writeln("<h3>You not choose any Operation</h3>")
    document.writeln("The result is:" + result);

}