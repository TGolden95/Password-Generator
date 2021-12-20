// Assignment Code
var generateBtn = document.querySelector("#generate");

var options = [];

var password = [];

var pwLength;

var noCommasPassword;

function getPasswordOptions() {
  pwLength = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  if (pwLength < 8 || pwLength > 128) {
    alert("Password length must be between 8 and 128 characters!");
    getPasswordOptions();
  }
  var specialCharactersArray = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];

  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var lowerLettersArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var capitalLettersArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var specialCharacters = confirm(
    "Click OK to include special characters in your password."
  );
  console.log(specialCharacters);

  if (specialCharacters) {
    options.push(...specialCharactersArray);
  }

  var numbers = confirm("Click OK to include numbers in your password.");
  if (numbers) {
    options.push(...numbersArray);
  }
  var capitalLetters = confirm(
    "Click OK to include capital letters in your password"
  );
  if (capitalLetters) {
    options.push(...capitalLettersArray);
  }

  var lowerLetters = confirm(
    "Click OK to include lower case letters in your password."
  );
  if (lowerLetters) {
    options.push(...lowerLettersArray);
  }
  generatePassword();
}

function generatePassword() {
  console.log(options);
  for (var i = 0; i < pwLength; i++) {
    var random = options[Math.floor(Math.random() * options.length)];
    password.push(random);
  }
  noCommasPassword = password.join("");

  writePassword();
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.textContent = noCommasPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions);
