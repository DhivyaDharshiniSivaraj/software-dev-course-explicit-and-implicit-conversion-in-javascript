console.log("TASK 1");
let result = Number("5") - 2; // "It ensures numeric subtraction"
console.log("The result is: " + String(result)); //"It ensures String output"

let input = "false";
let isValid = (input === "false"); //"Boolean("false") evaluates to true and input === "false" correctly evaluates to false"
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; //"Changes string "25" into a numeric value, preventing the "255" error."
console.log("Total Age: " + String(totalAge)); //"Prints the totalAge in String"


console.log("TASK 2");
console.log("IMPLICIT")

let value; 
console.log("Before:", value, "and the type is ",typeof value);
let answer = value + 5; 
console.log("After:", answer, "and the type is " ,typeof answer); 

console.log("EXPLICIT")

let total = null;
console.log("Before:", total, typeof total);
let converted = String(total);
console.log("After:", converted, typeof converted);

