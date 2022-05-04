/**
* Author: Maxton Lenox and Izetta Evans
* Created: 5.02.2022
* Assignment: Lab 6
*
**/

// Create variable of output outputdiv
var outputEl = document.getElementById("output");

// Create an array of numbers and assign it to a variable
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
outputEl.innerHTML += "The original array of numbers is: " + numbers + "<br /><br />";

// Log array for testing purposes
console.log("The original array of numbers is," , numbers);

// Create a function that will take a single parameter and do a calculation on it and return the results.
function squareNums(x) {
  return x*x;
}

// Test the function
console.log("5 squared is,", squareNums(5));
console.log("12 squared is,", squareNums(12));
console.log("34 squared is,", squareNums(34));

// Call the mapping function an array of numbers
var result = numbers.map(squareNums);

// Check if results is what it should be
console.log("Squaring original array becomes,", result);

outputEl.innerHTML += "The reults of calling the map funtion with the squaring function is: " + result + "<br /><br />";

// Create an anonymous function as a callback with map that subtracts 10 from number
var result = numbers.map(function(x) {
  return x-10;
})

// Check results, should return [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0]
console.log("Subtracting 10 results in,", result);

outputEl.innerHTML += "The results of calling the map function the anon function that subtracts 10 from each number is:" + result + "<br /><br />";
