// Movie Database
var favoriteMovie = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: ["Puff", "Jackie", "Living Sneezes"]
};


function printMovieInfo(movie) {
  console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars.join(", ") + ".");
}

printMovieInfo(favoriteMovie);



// Reading list
var books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: true
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: false
  },
  {
    title: "1984",
    author: "George Orwell",
    alreadyRead: true
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    alreadyRead: false
  }
];


for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var description = `"${book.title}" by ${book.author}`;
  
  if (book.alreadyRead) {
    console.log(`You already read ${description}.`);
  } else {
    console.log(`You still need to read ${description}.`);
  }
}



// Recipe Card

var recipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};


console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log("Ingredients:");
recipe.ingredients.forEach(function(ingredient) {
  console.log(ingredient);
});



// Fortune Teller

function tellFortune(children, partner, location, job) {
  console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`);
}


tellFortune(2, "Alice", "Paris", "Software Engineer");
tellFortune(3, "John", "Tokyo", "Graphic Designer");
tellFortune(1, "Emma", "New York", "Chef");



// Age Calculator

function calculateAge(birthYear, currentYear = new Date().getFullYear()) {
  const age1 = currentYear - birthYear;
  const age2 = age1 - 1;
  console.log(`You are either ${age2} or ${age1}`);
}


calculateAge(1990);          
calculateAge(2005, 2025);    
calculateAge(1985);         



// Lifetime Supply Calculator

function calculateSupply(age, amountPerDay) {
  const maxAge = 90;
  const yearsRemaining = maxAge - age;
  const totalAmount = Math.round(amountPerDay * 365 * yearsRemaining);
  console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
}


calculateSupply(30, 2.5);
calculateSupply(50, 1);
calculateSupply(25, 3.75);



// Geometrizer

function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference.toFixed(2));
}


function calcArea(radius) {
  const area = Math.PI * radius * radius;
  console.log("The area is " + area.toFixed(2));
}


calcCircumference(5);
calcArea(5);



// Temperature Converter

function celsiusToFahrenheit(celsius) {
   
  var fahrenheit = (celsius * 9/5) + 32;
  console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
}


function fahrenheitToCelsius(fahrenheit) {
  
  var celsius = (fahrenheit - 32) * 5/9;
  console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);
}


celsiusToFahrenheit(30);
fahrenheitToCelsius(86);


