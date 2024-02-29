
function updateClock() {
    var localDate = new Date();
    var hours = localDate.getHours();
    var minutes = localDate.getMinutes();
    var seconds = localDate.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var clockDiv = document.getElementById("watch");
    clockDiv.textContent = hours + ":" + minutes + ":" + seconds;
}
setInterval(updateClock, 1000);

function getTime() {
    var localDate = new Date();
    var hours = localDate.getHours();
    var minutes = localDate.getMinutes();
    var seconds = localDate.getSeconds();
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    var startWorkDiv = document.getElementById("startWork");
    startWorkDiv.textContent =+ hours + ":" + minutes;
}
document.getElementById("getTimeButton").addEventListener("click", getTime);

function calculateEnd() {
    var momentDate = new Date(); // Potrzebne do obliczenia czasu zakonczenia

    var timeInput = document.getElementById("timeInput");
    var value = parseInt(timeInput.value);
    var hours = momentDate.getHours(); // Pobierz aktualną godzinę
    var minutes = momentDate.getMinutes();
    var seconds = momentDate.getSeconds();
    
    minutes = (minutes < 10 ? "0" : "") + minutes;

    var newHours = (value + hours) % 24;
    var workEndDiv = document.getElementById("workEnd");
    workEndDiv.textContent = newHours + ":" + minutes;
}
document.getElementById("getTimeButton").addEventListener("click", calculateEnd);

function calculateWidth(){
    var timeInput = document.getElementById("timeInput");
    var value = parseInt(timeInput.value);
    var valueSeconds = value*3600;

    var currentDate = new Date();
    var timeStarted = document.getElementById("startWork").textContent;
    var timeArray = timeStarted.split(":");
    var hourToSubtract = parseInt(timeArray[0]);
    var minuteToSubtract = parseInt(timeArray[1]);

    var hour = currentDate.setHours(currentDate.getHours() - hourToSubtract);
    var minute = currentDate.setMinutes(currentDate.getMinutes() - minuteToSubtract);

    var time = currentDate.toLocaleTimeString();
    var timeArray2 = time.split(":");
    var hourToSubtract2 = parseInt(timeArray2[0])*3600;
    var minuteToSubtract2 = parseInt(timeArray2[1])*60;
    var secondsToSubtract2 = parseInt(timeArray2[2]);
    var x = secondsToSubtract2 + hourToSubtract2 + minuteToSubtract2

    var width = ((x)/valueSeconds)*100;
    var dynamicWidthDiv = document.getElementById("dynamicBar");
    dynamicWidthDiv.style.width = width + "%";
    console.log(((x)/valueSeconds)*100, x);

}
setInterval(calculateWidth, 5000);