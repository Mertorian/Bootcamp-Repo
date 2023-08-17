// // Arrays are lists of values

// // Declaration and access

// // Indices start at 0
// //               0  1  2  3  4   5
// const numbers = [2, 4, 6, 8, 10, 12];

// console.log(numbers);

// // Access array element

// const thirdNumber = numbers[2];

// console.log(thirdNumber);

// numbers[2] = 7;

// console.log(numbers);

// console.log(typeof numbers);

// console.log("products.length", products.length);

// console.log("products[1]", products[1]);
// console.log("products[1].price", products[1].price);

// products[9] = { name: "shoes", price: 120 };
// console.log(products);

// console.log(products.length);

// products[products.length] = { name: "book1", price: 15 };
// console.log("products", products);

// products[products.length] = { name: "book2", price: 15 };
// console.log("products", products);

// products[products.length] = { name: "book3", price: 15 };
// console.log("products", products);

// // Arrays can store any type of variable

const things = [2, "Ralf", null, undefined, "Mert"];

console.log("things[4]", things[4]);

const products = [
  {
    name: "iPhone",
    price: 1000,
  },
  {
    name: "refrigerator",
    price: 500,
  },
  {
    name: "toothbrush",
    price: 2,
  },
];

products.push({
  // pushes entry on last spot
  name: "book",
  price: 15,
});

products.push({
  name: "gucci book",
  price: 1500,
});

products.push({
  name: "gucci belt",
  price: 700,
});

products.push({
  name: "gucci shoes",
  price: 3000,
});

// console.log(products);

// // adding and removing items at the END! with push() and pop()

// products.pop(); //deletes last entry

// console.log(products);
// const lastItem = products.pop(); // save deleted entry [products.pop()]
// console.log("Your Product " + lastItem.name + " has been deleted!");
// console.log("last item", lastItem);

// // adding and removing items at the BEGINNING! with unshift() and shift()

// products.unshift({
//   name: "bible",
//   price: 23,
// });

// products.shift();

// slice

// console.log(products.slice(4));
// console.log(products);

products.splice(
  2,
  0,
  { name: "bucci gelt", price: 10000 },
  { name: "fake bucci", price: 100 }
);
console.log(products);
