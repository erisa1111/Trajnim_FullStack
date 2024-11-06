var noon = 12;
var wakeUpTime, sleepTime, dsTime;
var clock = document.getElementById("clock");
var oneSecond = 1000; // 1000 milliseconds (1 second)


function showCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = hours >= noon ? "PM" : "AM";


    var clockTime = hours + " : " + minutes + " : " + seconds + " " + meridian;
    clock.innerHTML = clockTime;
}

function changeTime() {
    var time = new Date().getHours();
    var image = "img/ds_clock.png"; 
    var imageHTML = document.getElementById("timeImage"); 


    if (time == wakeUpTime) {
        image = "img/morning.gif";
    } else if (time == dsTime) {
        image = "img/class.gif";
    } else if (time == sleepTime) {
        image = "img/night.gif";
    }
    
    imageHTML= image; 
}


function updateClock() {
    var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
    var dsTimeSelector = document.getElementById("dsTimeSelector");
    var sleepTimeSelector = document.getElementById("sleepTimeSelector");

    wakeUpTime = parseInt(wakeUpTimeSelector.value);
    dsTime = parseInt(dsTimeSelector.value);
    sleepTime = parseInt(sleepTimeSelector.value);


    changeTime();
}

setInterval(showCurrentTime, oneSecond);

var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", updateClock);