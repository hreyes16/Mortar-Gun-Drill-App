//This is a Small Deflection/Large Defleciton calculator to practice with while in a training environment.
//Created several functions for use later on. Might implement a Testing option where
//I can use the functions to generate combined data between the small and large deflections.

let defaultDeflection = document.querySelector('.small-data-deflection');
let defaultElevation = document.querySelector('.small-data-elevation');
let dataSmallGenField = document.querySelector('.small-data-btn');
let dataLargeGenField =document.querySelector('.large-data-btn');
let resetButton = document.querySelector('.reset');



//Function to generate a random small deflection.
function RandomSmallDeflection(min, max){
min = Math.ceil(20);
max = Math.floor(60);
return parseInt(Math.random()*(max-min) + min);
}

//function to generate random small elevation.
function RandomSmallEelevation(min,max){
min = Math.ceil(30);
max = Math.floor(90);
return parseInt(Math.random()*(max-min) +min);
}

//function for random large deflection
function RandomLargeDeflection(min, max){
min = Math.ceil(200);
max = Math.floor(300);
return parseInt(Math.random()*(max - min)+ min);
}

//function for random large elevation
function RandomLargeElevation(min, max){
    min = Math.ceil(100);
    max = Math.floor(200);
    return parseInt(Math.random()*(max - min) + min);
}
    



//Click event to generate data onto the output field.
dataSmallGenField.addEventListener('click', (e) =>{
var deflection = 2800;
var elevation = 1100;

defaultDeflection.value = deflection + RandomSmallDeflection();
defaultElevation.value = elevation + RandomSmallEelevation();
})


//Click event to generate data onto the output field
dataLargeGenField.addEventListener('click',(e) =>{
    var deflection = 2880;
    var elevation = 1100;

    defaultDeflection.value = deflection + RandomLargeDeflection();
    defaultElevation.value = elevation + RandomSmallEelevation();
})

