const heading = document.querySelector('h1');
const time = document.querySelector('p');
const startButton = document.querySelector('#start');
const focusMinutesInput = document.querySelector('#focus-minutes');

let remainingSeconds = 25 * 60;
let timer = null;

function focusSeconds() {
    const minutes = Number(focusMinutesInput.value);
    if (!Number.isInteger(minutes) || minutes < 1) {
        return 25 * 60;
    }
    return minutes * 60;
}

function updateHeading() {
    if (heading.textContent === 'Focus') {
        heading.textContent = 'Break';
        remainingSeconds = 5 * 60;
    } else {
        heading.textContent = 'Focus';
        remainingSeconds = focusSeconds();
    }
}

function updateDisplay() {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    time.textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
    if (timer !== null) return; // If the timer is already running, do nothing
    // Start the timer - setInterval will call the function every 1000 milliseconds (1 second)
    // the task id is stored in the variable timer so we can clear it later

    timer = setInterval(() => {
        remainingSeconds--; // Decrement the remaining seconds by 1

        if (remainingSeconds <= 0) {
            clearInterval(timer);
            timer = null;
            updateHeading();
        }

        updateDisplay();
    }, 1000);
});

focusMinutesInput.addEventListener('input', () => {
    if (timer !== null || heading.textContent !== 'Focus') return;
    remainingSeconds = focusSeconds();
    updateDisplay();
});

updateDisplay(); // Call the function to update the display when the page loads(1st time)

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    heading.textContent = 'Focus';
    remainingSeconds = focusSeconds();
    updateDisplay();
});

const pauseButton = document.querySelector('#pause');
pauseButton.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});
