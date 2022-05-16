/**
* Author: Maxton Lenox and Izetta Evans
* Created: 5.16.2022
* Assignment: Lab 6
*
**/

// Return Ravenclaw, Gryffindor, Hufflepuff, and Slytherin
// depending on length mod 4
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Ravenclaw"
  }
  else if (mod == 1) {
    return "Gryffindor"
  }
  else if (mod == 2) {
    return "Hufflepuff"
  }
  else if (mod == 3) {
    return "Slytherin"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
