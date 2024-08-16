// CHAPTER 26 TO 30

//QUESTION 1

document.addEventListener("DOMContentLoaded", function () {
  function processNumber() {
    const userInput = prompt("Enter a positive integer:");
    const number = parseFloat(userInput);
    if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
      alert("Please enter a valid positive integer.");
      return;
    }
   const rounded = Math.round(number);
   const floored = Math.floor(number);
   const ceiled = Math.ceil(number);

    const output = `
            <p>Number: ${number}</p>
            <p>Round off value: ${rounded}</p>
            <p>Floor value: ${floored}</p>
            <p>Ceil value: ${ceiled}</p>
        `;
    document.getElementById("output").innerHTML = output;
  }

  processNumber();
});

// QUESTION 2

function displayNumberOperations() {
  let userInput = parseFloat(prompt("Enter a negative floating point number:"));

  if (isNaN(userInput) || userInput >= 0) {
    alert("Please enter a valid negative floating point number.");
    return;
  }
  const originalNumber = userInput;
  const roundOffValue = Math.round(userInput);
  const floorValue = Math.floor(userInput);
  const ceilValue = Math.ceil(userInput);

  document.write("<p>Number: " + originalNumber + "</p>");
  document.write("<p>Round Off Value: " + roundOffValue + "</p>");
  document.write("<p>Floor Value: " + floorValue + "</p>");
  document.write("<p>Ceil Value: " + ceilValue + "</p>");
}

displayNumberOperations();

// QUESTION 3

function displayAbsoluteValue() {
  let userInput = parseFloat(prompt("Enter a number:"));
  if (isNaN(userInput)) {
    alert("Please enter a valid number.");
    return;
  }
  const absoluteValue = Math.abs(userInput);
  document.write("<p>Number: " + userInput + "</p>");
  document.write("<p>Absolute Value: " + absoluteValue + "</p>");
}

displayAbsoluteValue();

// QUESTION 4

function rollDice() {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  document.write("<p>Dice Roll Value: " + diceValue + "</p>");
}

rollDice();

// QUESTION 5

function tossCoin() {
  const coinValue = Math.random();
  const result = coinValue < 0.5 ? "Heads" : "Tails";
  document.write("<p>Coin Toss Result: " + result + "</p>");
}

tossCoin();

// QUESTION 6

function showRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  document.write("<p>Random Number (1-100): " + randomNumber + "</p>");
}

showRandomNumber();

// QUESTION 7

function getWeight() {
  let userInput = prompt(
    "Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):"
  );
  let weightMatch = userInput.match(/[\d.]+/);

  if (weightMatch) {
    let weight = weightMatch[0];
    document.write("<p>Your weight is: " + weight + " kilograms</p>");
  } else {
    document.write("<p>Invalid weight input.</p>");
  }
}

getWeight();

// QUESTION 8

function guessSecretNumber() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;

  let userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    alert("Please enter a number between 1 and 10.");
  } else if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the correct number.");
  } else {
    alert(
      "Sorry, that's not the correct number. The secret number was " +
        secretNumber +
        "."
    );
  }
}

guessSecretNumber();
