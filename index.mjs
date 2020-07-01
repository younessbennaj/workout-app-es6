/*/

    *** ES Module ***

    Classic module: context => function 

    ES module: context => file itself; one file / one module

    export keyword => add a variable or method to the module public API

    public/private

    variable/method defined in a module and exported => public
    variable/method defined in a module but not exported => private

    ES6 module => Singleton (!!!) voir ce que c'est

    *** File extension ***

    /!\ script tag => type="module"
    /!\ main and module file => extension '.mjs'

    *** Export ***

    named export => export + prop or method
    default export (like CommonJS & AMD) => export default function();

    

/*/

/*/
    Objectif => Avoir des éléments d'UI permettant d'enregister le nombre de
    séries et de répétitions d'un exercice de musculation
/*/

//Module as an object
import * as Module from './module.mjs';
/*/

    /!\ => We don't "instantiate" an ES module 

    e.g: 

    import * as Module2 from './module.mjs';
    console.log(Module === Module2); // true

    There's only one instance ever created, at first import in your program, 
    and all other imports just receive a reference to that same single instance.

/*/

//DOM element

// return Element() instance
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





