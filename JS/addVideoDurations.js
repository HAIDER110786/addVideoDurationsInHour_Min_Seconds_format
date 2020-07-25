function findTheTotalTime(){

    const videoDurations = [...document.querySelectorAll('.videoDurations span')];
    const totalTime = document.querySelector('.totalTime');

    let totalDurationSeconds = videoDurations
        .map(videoDuration=>videoDuration.textContent)
        .map(timeInString=>{
            const timeInFloat = timeInString.split(':').map(parseFloat);
            return timeInFloat[0]*60+timeInFloat[1];
        })
        .reduce((timeInSeconds,totalSeconds) => timeInSeconds+totalSeconds);

    const hours_minutes_seconds_format={
    hours:'',
    minutes:'',
    seconds:''
    }

    hours_minutes_seconds_format.hours = Math.floor(totalDurationSeconds/ 3600);
    totalDurationSeconds = totalDurationSeconds % 3600;
    hours_minutes_seconds_format.minutes = Math.floor(totalDurationSeconds/ 60);
    totalDurationSeconds = totalDurationSeconds % 60;
    hours_minutes_seconds_format.seconds = totalDurationSeconds;

    totalTime.textContent = `Total duration: 
    ${hours_minutes_seconds_format.hours}:${hours_minutes_seconds_format.minutes}:${hours_minutes_seconds_format.seconds}`;
}

findTheTotalTime();

const videoDurationsButton = [...document.querySelectorAll('.videoDurations button')];

videoDurationsButton.forEach(videoDurationButton=>{
    videoDurationButton.addEventListener('click',changeVideoDuration);
})

function changeVideoDuration(e){
    const inputValue = (this.previousElementSibling.value).trim();
    if(isNumber(inputValue[0]) && isNumber(inputValue[1]) && inputValue[2] == ':' && isNumber(inputValue[3] && isNumber(inputValue[4]) && inputValue.length === 5)){
        this.previousElementSibling.previousElementSibling.textContent = inputValue;
        this.previousElementSibling.value='';
        findTheTotalTime();
        // alert('please check the total time below which has been updated according to your input time');
    }
    else if(isNumber(inputValue[0]) && inputValue[1] == ':' && isNumber(inputValue[2] && isNumber(inputValue[3]) && inputValue.length === 4)){
        this.previousElementSibling.previousElementSibling.textContent = inputValue;
        this.previousElementSibling.value='';
        findTheTotalTime();
        // alert('please check the total time below which has been updated according to your input time');
    }
    else{
        alert('please enter a valid input');
    }
}

function isNumber(number){
    for (let index = 0; index <= 9; index++) {
        if(index.toString() == number){
            return true;
        }
    }
    return false;
}