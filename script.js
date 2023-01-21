// Initialized Variables with HTML elements
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const msg3 = document.getElementById("msg3");
const guess_btn = document.getElementById("guess_btn");

let answer = Math.floor(Math.random() * 100) + 1;
let no_of_guesses = 0;
let guessed_nums = [];

// Function for button click event
let play = () => {
    let guessBox = document.getElementById("guessBox").value;
    if (guessBox < 1 || guessBox > 100) {
        alert("Please enter a number between 1 and 100.");
    }
    else {
        guessed_nums.push(guessBox);
        no_of_guesses += 1;

        if (guessBox < answer) {
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " +
                guessed_nums;
        }
        else if (guessBox > answer) {
            msg1.textContent = "Your guess is too high.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " +
                guessed_nums;
        }
        else if (guessBox == answer) {
            msg1.textContent = "Yippie You Win!!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in " + no_of_guesses + " guesses";
            guess_btn.disabled = true;
        }
    }
}

// Event Listener for guess_btn
guess_btn.addEventListener('click', play);