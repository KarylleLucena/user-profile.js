// userProfile.js

// Create an object to store user information
let userProfile = {
  fullName: prompt("Enter your full name:"),
  age: parseInt(prompt("Enter your age:")),
  favoriteNumber: parseInt(prompt("Enter your favorite number:")),
  favoriteColors: [],
};

// Prompt the user for three favorite colors and add them to the array
for (let i = 0; i < 3; i++) {
  let color = prompt(`Enter your favorite color ${i + 1}:`);
  userProfile.favoriteColors.push(color);
}

// Log the entire userProfile object to the console
console.log(userProfile);
