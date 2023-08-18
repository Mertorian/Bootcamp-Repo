// For Loop

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// ...

// infinite loop example:
// for (let i = 10; i >= 0; i++) {
//   console.log(i);
// }

// Array always starts at "0"
const lettersArr = ["a", "b", "c", "d"];

for (let i = 0; i < lettersArr.length; i++) {
  console.log(i);
  const output = lettersArr[i];
  console.log(i + ":" + output);
}
