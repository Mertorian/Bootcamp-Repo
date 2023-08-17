console.log("AND (&&)", true && true); // Logical AND => only returns true if both arguments are true
console.log("OR (||)", true || true); // Logical OR => returns false if both arguments are false, otherwise true
console.log("EQUALITY (===)", "Mert" === "Mert"); //Equality operator returns true if both arguments are equal
console.log("NOT EQUAL (!==)", "Mert" !== "Andy"); // Inequality operator returns false if both arguments are equal, otherwise true
console.log("NOT (!)", !true); // Logical NOT operator returns false if its argument is true and true if its false

let age = 18;
let nationality = "US";

let isAdult =
  (nationality === "US" && age >= 21) || (nationality !== "US" && age >= 18);

let isChild = !isAdult;

console.log("isChild", isChild);
console.log("isAdult", isAdult);

console.log(isAdult);

if (isAdult) {
  console.log("Enjoy your Beer!!");
} else {
  console.log("Here's some warm Milk for you.");
}
