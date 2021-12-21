// all characters that can be used in password string
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()*_";
const textareaPassword = document.getElementById("textarea-password");

// when user clicks on button

// ask user to enter desired length of password
let generatePassword = function () {
  // passwordLength is not defined?
  let passwordLength = Number(
    window.prompt("Enter desired length of password between 8 - 128 characters")
  );
  //between 8-128 characters
  if (passwordLength >= 8 && passwordLength <= 128) {
    // else provide error warning
  } else {
    window.alert("You must choose a numerical value between 8-128 characters");
    return;
  }

  // ask to include lowercase
  let includeLowercase = window.confirm(
    "Would you like to include lowercase characters?"
  );

  // ask to include uppercase
  let includeUppercase = window.confirm(
    "Would you like to include uppercase characters?"
  );

  // ask to include numbers
  let includeNumbers = window.confirm("Would you like to include numbers?");

  // ask to include symbols
  let includeSymbols = window.confirm("Would you like to include symbols?");

  // once all inputs are selected
  let characterSet = "";

  if (includeLowercase) {
    characterSet = characterSet + lowercase;
  }
  if (includeUppercase) {
    characterSet = characterSet + uppercase;
  }
  if (includeNumbers) {
    characterSet = characterSet + numbers;
  }
  if (includeSymbols) {
    characterSet = characterSet + symbols;
  }

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSymbols
  ) {
    window.alert("You must choose at least one character type");
    return;
  }

  // generate password
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    // Select a random character from chosen inputs
    const randomCharacter =
      characterSet[Math.floor(Math.random() * characterSet.length)];

    // add to password
    password = password + randomCharacter;
  }

  return password;
  // once password is decided
};

// Starting Code
// Generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
