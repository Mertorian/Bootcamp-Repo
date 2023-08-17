// 01 - value type number

1 - "number A is and stays 30, number B is 30 and changes to 45";
1.1 - "Assigns the value of numberA to numberB while keeping numberA";
1.2 - "Changes numberB from 30 to 45";

// 02 - reference type object

2 - '"John {name: Jane, age: 30, job: developer}"';
('"Jane {name: Jane, age: 30, job: developer}"');
2.1 - 'making a deep copy of the object "john"';
2.2 - 'changing the name of the object from "john" to "jane"';
2.3 - '"Three"';
2.4 - '"Job"';

// 03 - dot notation

const golf = {
  color: "Red",
  maxSpeed: "180",
};

const opel = {
  color: "Blue",
  maxSpeed: "185",
};

console.log("Golf: " + golf.color);
console.log("Opel: " + opel.color);

let golfColor = golf.color;

golf.color = opel.color;
opel.color = golfColor;

console.log("----------");
console.log("Golf: " + golf.color);
console.log("Opel: " + opel.color);
