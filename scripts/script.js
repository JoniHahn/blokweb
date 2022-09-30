// JavaScript Document
console.log("hi");

var buttonEl = document.querySelector("header nav button");
var navSec = document.querySelector("header nav section");

function TMenu () {
    buttonEl.classList.toggle("iconchange");
    navSec.classList.toggle("MenuOpen");
}

buttonEl.addEventListener("click", TMenu);

