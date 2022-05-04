/**
* Author: Maxton Lenox and Izetta Evans
* Created: 5.04.2022
* Assignment: Lab 6
*
**/

// Assign output div
var outputEl = document.getElementById("output");

// Create new p element
var new1E1 = document.createElement("p");

// Change inner text
new1E1.innerText = "heeeee heeee haaaa haaaa";

// Create another p element
var new2El = document.createElement("p");

// Create text node
new2El.innerText = "heeee hawwww hollla back giirrrl";

// Append p elements to output div
outputEl.appendChild(new1E1);
outputEl.appendChild(new2El);


// Task X experiment

// Click on the screen to show a hidden message
document.addEvenListener("click", showHidden);

function showHidden() {
  document.getElementById("output2").innerHTML = "You have found the hidden message!!!<br>Sooooooooo cooool<br>Mind blowing"
}

// Hover over the purple box to insert text
function mouseOver(event) {
  const ev = document.createEvent("MouseEvent");
  ev.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  document.getElementById("output3").dispatchEvent(ev);
}
