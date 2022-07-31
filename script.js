//create the variables for the password
var passwordLength = [];
var userChoice = [];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = ["!","@","#","$","%","%","^","&","*","(",")","-","_","=","+","`","~","[","]","{","}","|",":",";","<",">","/","?"];

//Confrim variables
var confrimLetters = letters;
var confrimUpperLetters;
var confrimNumbers;
var confrimCharactors;


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(){
  passwordLength = prompt("Choose a password length between 8 and 128");
  console.log(passwordLength);{
    if (!passwordLength || passwordLength < 8 || passwordLength > 128)
      generatePassword();
  } alert("Your password will have " + passwordLength + " charactors");
  
  confrimLetters = confrim("Would you like lower case letters in you password?");
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}