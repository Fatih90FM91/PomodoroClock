
let workTimeMinute =document.querySelector('[time-minute]');
let workTimeSecond =document.querySelector('[time-second]');

let timeCycle = document.getElementById('time-cycle');

let breakTimeMinute =document.querySelector('[time-minute-break]');
let breakTimeSecond =document.querySelector('[time-second-break]');

let start=document.getElementById('start');
let reset=document.getElementById('reset');
let pause=document.getElementById('pause');

let startTimer;

start.addEventListener('click',function(){
 
    if(startTimer==undefined){
        startTimer=setInterval(timer,1000);
            
    }else{
        alert("The time is already running!!");
    }
   
})

reset.addEventListener('click' ,function(){
    workTimeMinute.innerText=25;
    workTimeSecond.innerText="00";
    breakTimeMinute.innerText=25;
    breakTimeSecond.innerText="00";

    timeCycle.innerText=0;

    pauseInterval()
    startTimer=undefined;

})

pause.addEventListener('click',function(){

pauseInterval()
startTimer=undefined;

})





function timer(){

    // work time is counting in here

    if(workTimeSecond.innerText!=0){
        workTimeSecond.innerText--;
    } else if(workTimeMinute.innerText!=0 && workTimeSecond.innerText==0){
        workTimeSecond.innerText=59;
        workTimeMinute.innerText--;

    }
    
    // break time is counting in here
    if(workTimeMinute.innerText == 0 && workTimeSecond.innerText == 0){
       
        if(breakTimeSecond.innerText!=0){
            console.log("sucess");
            breakTimeSecond.innerText--;
        }else if(breakTimeMinute.innerText != 0 && breakTimeSecond.innerText == 0){
            breakTimeSecond.innerText=59;
            breakTimeMinute.innerText--;
    
        }
    }

    //starting Cycle in here
    

    if(workTimeMinute.innerText==0 && workTimeSecond.innerText==0 && breakTimeMinute.innerText==0 && breakTimeSecond.innerText==0){
        console.log("sucess 2");
        workTimeMinute.innerText=25;
        workTimeSecond.innerText="00";

        breakTimeMinute.innerText=5;
        breakTimeSecond.innerText="00";

        timeCycle.innerText++;
    }

}

function pauseInterval(){
    clearInterval(startTimer);
}


