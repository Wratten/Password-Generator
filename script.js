// generate a password

// when user clicks on button

// ask user to enter desired length of password
// between 8-128 characters
// else provide error warning

// ask to include uppercase

// ask to include lowercase

// ask to include numbers

// ask to include symbols

// once all inputs are selected

// generate password

// once password is decided

// display password in box

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
