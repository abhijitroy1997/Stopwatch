
// Selecting DOM elements
// Stopwatch display element
let stopwatchDisplay = document.querySelector('.stopwatchDisplay'); 
// Stopwatch display text element
let stopwatchHeader = document.querySelector('.stopwatchHeader'); 
// Start button element
let startBtn = document.getElementById('startBtn'); 
// Stop button element
let stopBtn = document.getElementById('stopBtn'); 
// Reset button element
let resetBtn = document.getElementById('resetBtn'); 

// Variables to hold stopwatch values
let milsec = 0; // Milliseconds
let sec = 0; // Seconds
let min = 0; // Minutes

// Variable to store the interval ID
let intervalID = null; 

// Event listener for the start button
startBtn.addEventListener('click', function () {
    if (intervalID !== null) {
        // Clear any previous interval
        clearInterval(intervalID); 
    }
    // Start the interval for the timer
    intervalID = setInterval(startTimer, 10); 
});

// Event listener for the stop button
stopBtn.addEventListener('click', function () {
    // Stop the timer by clearing the interval
    clearInterval(intervalID); 
});

// Event listener for the reset button
resetBtn.addEventListener('click', function () {
    // Stop the timer by clearing the interval
    clearInterval(intervalID); 
    // Reset the display text
    stopwatchHeader.innerHTML = 'Stopwatch'; 
    // Reset the display time
    stopwatchDisplay.innerHTML = '00 : 00 : 00'; 
    // Reset the stopwatch values
    milsec = sec = min = 0; 
});

// Function to start the timer and update the display
function startTimer() {
    milsec++; // Increment milliseconds

    if (milsec == 100) { // If milliseconds reach 100, reset and increment seconds
        milsec = 0;
        sec++;

        if (sec == 60) { // If seconds reach 60, reset and increment minutes
            sec = 0;
            min++;
        }
    }

    // Format the time values with leading zeros if necessary
    let milsecString = milsec < 10 ? `0${milsec}` : milsec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    // Determine the plural/singular form of minute and second
    let minText = min < 2 ? `Minute` : `Minutes`;
    let secText = sec < 2 ? `Second` : `Seconds`;

    // Update the stopwatch display elements with the formatted time and text
    stopwatchDisplay.innerHTML = `${minString} : ${secString} : ${milsecString}`;
    stopwatchHeader.innerHTML = `${minString} ${minText} : ${secString} ${secText}`;
}
