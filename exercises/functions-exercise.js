// 1 - function log out

function printWelcomeMessage() {
  console.log("Welcome at Taktsoft Campus Talents");
}

// printWelcomeMessage();

// 2 - function return message

function createWelcomeMessage() {
  const message = "Welcome at Taktosft Campus Talents";
  return message;
}
// console.log(createWelcomeMessage());

// 3 - function create personal message

function createPersonalMessage(firstName) {
  const message =
    "Hello " + firstName + ", " + "Welcome at Taktsoft Campus Talents";

  return message;
}
// console.log(createPersonalMessage("Gary"));

// 4 - functions Teacher - Student

function helloTeacher(name) {
  const teachers = ["Ralf", "Thomas", "Ulrich", "Sascha"];

  if (teachers.includes(name)) {
    return "Hello teacher";
  } else {
    return "Hello student";
  }
}

// console.log(helloTeacher("Ralf"));

// 5 - extend above function to call "Hello stranger" if no parameter.

function helloTeacher(name) {
  const teachers = ["Ralf", "Thomas", "Ulrich", "Sascha"];

  if (name === undefined) {
    return "Hello stranger";
  } else if (name === "") {
    return "Hello stranger";
  } else if (teachers.includes(name)) {
    return "Hello teacher";
  } else {
    return "Hello student";
  }
}

// console.log(helloTeacher());

// 6 - function that accepts an object in form as parameter

function createAgeAwareMessage(name, lastname, age) {
  if (age < 18) {
    return "Hi" + name;
  }
  if (age > 18) {
    return "Welcome Mr " + lastname;
  }
}

const person1 = {
  name: "Shrek",
  lastname: "Ogre",
  age: 42,
};
const person2 = {
  name: "Donkey",
  lastname: "Dragon",
  age: 21,
};
const person3 = {
  name: "Lord",
  lastname: "Farquaad",
  age: 17,
};

// console.log(createAgeAwareMessage(person1));

// 10 - calculatin total price accept array (loop)

function calculateTotalPrice(products) {
  let totalPrice = 0;
  //   console.log(products);
  for (let i = 0; i < products.length; i++) {
    // console.log(i);
    // console.log(products[i].price);
    totalPrice = totalPrice + products[i].price;
    // console.log(totalPrice);
  }
  return totalPrice;
}
const products = [
  {
    productName: "iPhone",
    price: 600,
  },
  {
    productName: "Refrigerator",
    price: 400,
  },
  {
    productName: "Shrek the Movie",
    price: 69,
  },
];
const totalPrice = calculateTotalPrice(products);
console.log(totalPrice);
