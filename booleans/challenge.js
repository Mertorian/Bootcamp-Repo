let currentMonth = Math.floor(Math.random() * 12 + 1); // number between 1 and 12
let currentHour = Math.round(Math.random() * 23); // number between 0 and 23
let season;
let time;

// Month: 8, Hour: 14
// It's a morning in autumn.
// It's an evening in spring.

// Month
if (currentMonth === 12 || currentMonth <= 2) {
  season = "in Winter";
} else if (currentMonth >= 3 && currentMonth <= 5) {
  season = "in Spring";
} else if (currentMonth >= 5 && currentMonth <= 7) {
  season = "in Summer";
} else if (currentMonth >= 8 && currentMonth <= 11) {
  season = "in Autumn";
}

// Hour
if (currentHour < 12) {
  time = "It's a Morning";
} else if (currentHour > 12) {
  time = "It's an Evening";
}

console.log(time + " " + season);
