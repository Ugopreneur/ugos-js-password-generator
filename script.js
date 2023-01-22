// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {

  // Create an empty varaiable to house all the possible characters in one long string based on user's choices
  allCharacters = "";

  // Create an empty string to house my generated password
  password = "";

  // Prompts to gather user's character choices 
  var specialChoice = confirm("Click OK if you would like to include special characters.");
  var numericChoice = confirm("click OK if you would like to include numeric characters.");
  var lowercaseChoice = confirm("click OK if you would like to include lowercase characters.");
  var uppercaseChoice = confirm("click OK if you would like to include uppercase characters.");

  // As the user selects character choices, add that character set to the long string of possible characters
  // And also ensure that there is at least one of each of the selected character types in the generated password
  if (specialChoice) {
    allCharacters = allCharacters + specialCharacters;
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }

  if (numericChoice) {
    allCharacters = allCharacters + numericCharacters;
    password += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
  }

  if (lowercaseChoice) {
    allCharacters = allCharacters + lowerCasedCharacters;
    password += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
  }

  if (uppercaseChoice) {
    allCharacters = allCharacters + upperCasedCharacters;
    password += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
  }

  // If at least one charcter type is chosen, proceed. If none are, we cant continue
  if (specialChoice || numericChoice || lowercaseChoice || uppercaseChoice) {
    return {
      password: password,
      allCharacters: allCharacters
    }
  }
  else {
    alert("Sorry, generator failed! You must select atleast one character type");
  }
};


// Function to generate password with user input
function generatePassword() {
  // First, ask the user how long the password should be via a prompt
  figureInputted = prompt("How many characters would you like your password to contain?");

  // Collect the user's response and convert to an integer
  numberOfCharacters = parseInt(figureInputted);

  // Only run the random character generator if the user's response is between 10 and 64
  if (numberOfCharacters >= 10 && numberOfCharacters <= 64) {

    // continue with asking the user the types of characters they would like
    getPasswordOptions();
  }

  // If user's response is not a number between 10 and 64, then reject it
  else {
    if (numberOfCharacters < 10) {
      alert("Password must be at least 10 characters, but not more than 64");
    }
    else if (numberOfCharacters > 64) {
      alert("Password must be no more than 64 characters, but at least 10");
    }
    else {
      alert("Invalid input! Please enter a number between 10 and 64");
    }
  }

  //this loop generates a random characters from the allCharacters string, and then adds those characters at that index to the "password" string
  for (var i = 0; i < numberOfCharacters; i++) {
    var randomIndex = Math.floor(Math.random() * getPasswordOptions.result.allCharacters.length);
    getPasswordOptions.result.password += getPasswordOptions.result.allCharacters[randomIndex];
  }
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);