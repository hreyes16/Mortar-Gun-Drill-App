let seconds = 00;
let tens = 00;
let getSeconds = document.getElementById('seconds');
let getTens = document.getElementById('tens');
let buttonStart = document.querySelector('.start-test');
let buttonStop = document.querySelector('.stop-test');
var interval;
let reset = document.querySelector('.reset');
let stopTime = document.querySelector('.stop-test');



buttonStart.addEventListener('click', (e) =>{
        clearInterval(interval);
        interval = setInterval(startTimer, 1000); 
        
        });

function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 60){
        seconds++;
        getSeconds.innerHTML = "0" + seconds;
        tens = 0;
        getTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
}

reset.addEventListener('click', (e) =>{
    clearInterval(interval);
    seconds = "00 :";
    tens = "00";
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    defaultDeflection.value = 2800;
    defaultElevation.value = 1100;

    });

    stopTime.addEventListener('click', (e) =>{
        clearInterval(interval);
    })