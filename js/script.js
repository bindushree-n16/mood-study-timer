function startSession() {
    const mood = document.getElementById("mood-select").value;
    const suggestion = document.getElementById("suggestion");

    const moodSuggestions = {
        happy: "You're in a great mood! Try 40 mins of focused work. 🎧",
        bored: "Start small – 15 mins and then take a break. 😌",
        tired: "Just 10 mins to get started, you'll feel better! 💤",
        sad: "Be gentle with yourself — try 15 mins. 🌿",
        energetic: "Go full speed! Try 50 mins of deep focus. 🚀"
    };

    suggestion.textContent = moodSuggestions[mood] || "Just start. You've got this!";
    startTimer(getMoodDuration(mood));
}

function getMoodDuration(mood) {
    switch (mood) {
        case "happy": return 40 * 60;
        case "bored": return 15 * 60;
        case "tired": return 10 * 60;
        case "sad": return 15 * 60;
        case "energetic": return 50 * 60;
        default: return 25 * 60;
    }
}

let timerInterval;

function startTimer(duration = 25 * 60) {
    const display = document.getElementById('timer');
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        display.textContent = ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')};
        duration--;

        if (duration < 0) {
            clearInterval(timerInterval);
            display.textContent = "Time's up! Take a break 😊";
        }
    }, 1000);
}
