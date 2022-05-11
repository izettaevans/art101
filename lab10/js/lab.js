/**
* Author: Maxton Lenox and Izetta Evans
* Created: 5.09.2022
* Assignment: Lab 6
*
**/

// sortUserInput - a function that take user input and sortthe letters of their name
// Taken from Lab 7
function sortUserInput () {
  // Pull value 1 from input box
  var username= document.getElementById('user-name1').value;
  // split string array
  var nameArray = username.split('');
  console.log(nameArray);
  // sort array
  var nameArraySort = nameArray.sort();
  console.log(nameArraySort);
  // joing array back to string
  var nameSorted = nameArraySort.join('');
  console.log(nameSorted)

  // Print out results in output div
  document.getElementById("p-output1").innerHTML = nameSorted;

  // Pull value 2 from input box
  var username = document.getElementById('user-name2').value;
  // split string to array
  var nameArray = username.split('');
  console.log(nameArray);
  // sort array
  var nameArraySort = nameArray.sort();
  console.log(nameArraySort);
  // join array back to string
  var nameSorted = nameArraySort.join('');
  console.log(nameSorted)

  //Print out results in output div
  document.getElementById("p-output2").innerHTML = nameSorted;

  // Pull value 3 from input box
  var username = documet.getElementById('user-name3').value;
  // split string to array
  var nameArray = username.split('');
  console.log(nameArrat);
  // sort nameArray
  var nameArraySort = nameArray.sort();
  console.log(nameArraySort);
  // join array back to string
  var nameSorted = nameArraySort.join('');
  console.log(nameSorted)

  //Print out results in output div
  document.getElementById("p-output3").innerHTML = nameSorted;
}

// Add on click event listener to my-button to call sortUserInput
const inputEl = document.getElementById("my-button");
inputEl.addEventListener("click", sortUserInput);
