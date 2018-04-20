var colors = ['red', 'blue', 'green', ];

// for (var i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

colors.forEach(function(color) {
  console.log(color);
});

//https://codeburst.io/es6-tutorial-for-beginners-5f3c4e7960be

//arrow functions old vs new
function oldSyntax() {
  var getOldSyntax = document.getElementById("oldSyntax");
  getOldSyntax.textContent = "this was written with old vanilla javascript syntax";
}

oldSyntax();

newSyntax = () => {
  var getNewSyntax = document.getElementById("newSyntax");
  getNewSyntax.textContent = "this was written with new ES6 javascript syntax";
};

newSyntax();


// Using parameters with vanilla js
function listingNameJob(name, job) {
  document.getElementById("nameJob").innerHTML =
    "Welcome " + name + ", the " + job + ".";
}

listingNameJob('Tony', 'Web Developer');

//Using parameter with ES6
// Default parameters are parameters which are given by default while declaring a function. But it’s value can be changed when calling the function.

// Example

// let Func = (a, b = 10) => {
//  return a + b;
// }
// Func(20); // 20 + 10 = 30

//Let's create a new element but this time write the ES6 Function with parameters
