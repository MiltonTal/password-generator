// Assignment Code
var generateBtn = document.querySelector("#generate");


//create confirm variable
const userChoice;

confirmIfNumbers

confirmIfCharactors

confirmLetters

confirmLettersBig


//create the variables for the password

let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let lettersBig = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const characters = ["!","@","#","$","%","%","^","&","*","(",")","-","_","=","+","`","~","[","]","{","}","|",":",";","<",">","/","?",
];

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//create the prompt for the users input
function generatePassword() {
  userChoice = prompt(
    "Choose your password legnth. Choose between 8 and 128 charactors."
  );


}

//create the function logic for the password generator
