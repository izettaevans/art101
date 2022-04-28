/**
* Author: Maxton Lenox and Izetta Evans
* Created: 4.27.2022
* Assignment: Lab 6
*
**/

// sortUserName - a function that takes user imput and sort the letters
// of their name
function sortUserName(){
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the inputArray
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort=", namrArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameArraySort);
  //Note that I could have done the above lines as a single line:
  // userName.toLower ().split("").sort().join("")
  return nameSorted;
}

//Output
document.writeln("Oh hey, I've fied your name:",
    sortUserName(), "</br>");
