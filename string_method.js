  // QUESTION 1 

var firstName = prompt("Please enter your first name:")
var lastName = prompt("Please enter your last name:");
var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "!");

  // QUESTION 2 

var favoritePhoneModel = prompt("Please enter your favorite mobile phone model:");
var inputLength = favoritePhoneModel.length;

alert("The length of your input is: " + inputLength);

  //QUESTION 3

var word1 = "Pakistani";
var indexOfN = word1.indexOf('n');

alert("The index of 'n' in the word 'Pakistani' is: " + indexOfN);

   // QUESTION 4 

var word2 = "Hello World";
var lastIndexL = word2.lastIndexOf('l');

alert("The last index of 'l' in the word2 'Hello World' is: " + lastIndexL);

  // QUESTION 5

var word3 = "Pakistani";
var characterAtIndex3 = word3.charAt(3);

alert("The character at the 3rd index in the word 'Pakistani' is: " + characterAtIndex3);


  // QUESTION 6

var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var fullName = firstName.concat(" ", lastName);

alert("Hello, " + fullName + "!");

  // QUESTION 7

var city = "Hyderabad";
var replace = city.replace("Hyder", "Islam");

alert("The new word is: " + replace);


  //QUESTION 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");

alert("The message is: " + newMessage);


  // QUESTION 9

var str = "249";
var num = Number(str);

console.log("Original value: " + str + ", Type: " + typeof str);
console.log("Converted value: " + num + ", Type: " + typeof num);


  //QUESTION 10

var userInput = prompt("Please enter some text:");
var capitalizedInput = userInput.toUpperCase();

alert("The text in capital letters is: " + capitalizedInput);

  // QUESTION 11

function convertToTitleCase(input) {
  let words = input.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}


 // QUESTION 12

var num = 35.36;
var numString = num.toString().replace('.', '');

document.write(numString);

//QUESTION 13

function isValidUsername(username) {
  const specialSymbols = /[@.,!]/;
  return !specialSymbols.test(username);
}

function getUsername() {
  let username = prompt("Enter your username:");
  while (!isValidUsername(username)) {
      alert("Invalid username! Please do not include any of the following symbols: @ . , !");
      username = prompt("Enter your username:");
  }
  alert("Username accepted: " + username);
}

getUsername();

 // QUESTION 14 

const A = ["cake", "apple pie", "cookie", "chips", "patties"];

function srchItem(input) {
    const lowerInput = input.toLowerCase(); 
    for (let i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === lowerInput) {
            return true; 
        }
    }
    return false; 
}

document.addEventListener('DOMContentLoaded', function() {
    const userInput = prompt("Enter an item to search:");

    if (userInput) { 
        const found = srchItem(userInput);
        if (found) {
            alert(`Yes, '${userInput}'is avalible in our bakery .`);
        } else {
            alert(`we are sorry, '${userInput}'is not avalible in our bakery .`);
        }
    }
});

  // QUESTION 15 

function validatePassword(password) {
  if (password.length < 6) {
      return "Password must be at least 6 characters long.";
  }

  if (/^\d/.test(password)) {
      return "Password should not start with a number.";
  }

  const hasAlphabet = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  if (!hasAlphabet || !hasNumber) {
      return "Password must contain both alphabets and numbers.";
  }
  return null; 
}
function promptForPassword() {
  let isValid = false;
  while (!isValid) {
      const password = prompt("Enter a password:");

      if (password) {
          const errorMessage = validatePassword(password);
          if (errorMessage) {
              alert(errorMessage);
          } else {
              alert("Password is valid.");
              isValid = true; 
          }
      } else {
          alert("Password cannot be empty.");
      }
  }
}
document.addEventListener('DOMContentLoaded', promptForPassword);

  //QUESTION 16

document.addEventListener('DOMContentLoaded', function() {
  var university = "University of Karachi";
  var universityArray = university.split(' '); 
  var output = 'Array elements:<br>';
  universityArray.forEach(function(element) {
      output += element + '<br>';
  });
  
  var outputElement = document.createElement('p');
  outputElement.innerHTML = output;
  document.body.appendChild(outputElement);
});

// QUESTION 17 
function getLastCharacter(input) {
  if (input.length === 0) {
      return "Input is empty!";
  }
  const lastCharacter = input.charAt(input.length - 1);
  return lastCharacter;
}
const userInput = prompt("Enter a string:");
const lastChar = getLastCharacter(userInput);

console.log(`The last character of '${userInput}' is '${lastChar}'.`);

// QUESTION 18

function countTheOccurrences(str) {
  str = str.toLowerCase();
  const words = str.split(/\s+/);
  let count = 0;
  for (const word of words) {
      if (word === "the") {
          count++;
      }
  }
  return count;
}
const inputString = "The quick brown fox jumps over the lazy dog";
const count = countTheOccurrences(inputString);
console.log(`The word "the" occurs ${count} times in the given string.`);
