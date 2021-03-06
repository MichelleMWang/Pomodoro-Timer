const timer = {
    pomdoro: 25, 
    shortBreak: 5, 
    longBreak: 15,
    longBreakInterval: 4 
}; 

const modeButtons = document.querySelector(".time-options"); 
modeButtons.addEventListener("click", handleMode); 

const handleMode = (event) =>{
    const { mode } = event.target.dataset; 

    if (!mode) return; 

    switchMode(mode); 
}

function switchmode(mode) {
    timer.mode = mode; 
    timer.remainingTime = {
        totalSeconds: timer[mode] * 60,  //total seconds remaining 
        minutes: timer[mode], 
        seconds: 0,
}; 
document
.querySelectorAll('button[data-mode]')
.forEach(e => e.classList.remove('active'));
document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
//document.body.style.backgroundColor = `var(--${mode})`;

updateClock();

}

function updateClock(){
    const{remainingTime} = timer;
    const minutes = `${remainingTime.minutes}`.padStart(2, '0');
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');
  
    const min = document.getElementById('js-minutes');
    const sec = document.getElementById('js-seconds');
    min.textContent = minutes;
    sec.textContent = seconds;
}

