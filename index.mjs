import * as Module from './module.mjs';

//DOM element
let repsCell = document.getElementById("repsCell");
let setsCell = document.getElementById("setsCell");
let repsButton = document.getElementById("repsButton");
let setsButton = document.getElementById("setsButton");

//Event handlers
repsButton.addEventListener("click", () => {
    Module.incrementReps();
    repsCell.innerHTML = Module.getReps();
})

setsButton.addEventListener("click", () => {
    Module.incrementSets();
    setsCell.innerHTML = Module.getSets();
})





