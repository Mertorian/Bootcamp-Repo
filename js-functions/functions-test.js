function printGreeting() {
  console.log("Willkommen zu unserem Pogrammierkurz!");
  console.log("Wir hoffen, Du fühlst Dich hier wohl");
  console.log("Viel Spaß bei den Aufgaben!");
}

function printUser(firstName, lastName) {
  console.log(
    "Hallo " +
      firstName +
      " " +
      lastName +
      ", Willkommen zu unserem Pogrammierkurs!"
  );
  console.log("Wir hoffen, Du fühlst Dich hier wohl");
  console.log("Viel Spaß bei den Aufgaben!");
}

// printUser("Gary", "Rockbottom");

function createPersonalGreeting(firstName, lastName) {
  const message =
    "Hallo " +
    firstName +
    " " +
    lastName +
    ", Willkommen zu unserem Pogrammierkurs!";
  return message;
}

// const personalGreeting = createPersonalGreeting("Gary", "Rockbottom");
console.log(createPersonalGreeting("Gary", "Rockbottom"));
