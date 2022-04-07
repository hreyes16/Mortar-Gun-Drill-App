//This is a Small Deflection/Large Defleciton calculator to practice with while in a training environment.
//Created several functions for use later on. Might implement a Testing option where
//I can use the functions to generate combined data between the small and large deflections.

let defaultDeflection = document.querySelector('.small-data');
let defaultElevation  = document.querySelector('.small-elevation');
let GenerateSmallData = document.querySelector('.genSmallData');
let GenerateLargeData =document.querySelector('.genLargeData');
let resetButton = document.querySelector('.reset');


  
//Function to generate a random small deflection.
function RandomSmallDeflection(min, max){
min = Math.ceil(20);
max = Math.floor(60);
return parseInt(Math.random()*(max-min) + min);
}

//function to generate random small elevation.
function RandomSmallElevation(min,max){
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
GenerateSmallData.addEventListener('click', (e) =>{
let deflection = 2800;
let elevation = 1100;

defaultDeflection.value = deflection + RandomSmallDeflection();
defaultElevation.value = elevation + RandomSmallElevation();
})


//Click event to generate data onto the output field
GenerateLargeData.addEventListener('click',(e) =>{
let deflection = 2880;
let elevation = 1100;

    defaultDeflection.value = deflection + RandomLargeDeflection();
    defaultElevation.value = elevation + RandomLargeElevation();
})

resetButton.addEventListener('click', (e) =>{
    defaultDeflection.value = 2800;
    defaultElevation.value = 1100;
})