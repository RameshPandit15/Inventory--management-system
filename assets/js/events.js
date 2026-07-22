/**
 Contains all event listeners.

delete button

edit button

search input

sort button

filter select
 */

const body = document.querySelector("body");
const mode = document.getElementById("mode");
const sidebar = document.querySelector(".sidebar");

let isBgColorBlack = true;

function toggleColor()
{
    body.style.backgroundColor = isBgColorBlack ? "white" : "black"
    
    sidebar.style.backgroundColor = isBgColorBlack ? "white" : "black";
    isBgColorBlack = !isBgColorBlack;
};
mode.addEventListener("click", toggleColor);