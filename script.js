//create the variables for the password
var passwordLength = [];
var userChoice = [];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = ["!","@","#","$","%","%","^","&","*","(",")","-","_","=","+","`","~","[","]","{","}","|",":",";","<",">","/","?"];


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(){
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
      var randomChar = Math.floor(Math.random() * userChoice.length);
      password = password + userChoice[randomChar];
  }
  return password;
}

function userPrompts(){
  userChoice = [];

  passwordLength = parseInt(prompt("Choose a password length between 8 and 128"));
 
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Input was invalid try again.");
      return false;
  } 

  if(confirm("Will your password contain lowercase letters?")){
    userChoice = userChoice.concat(letters);
  }
  if(confirm("Will your password contain uppercase letters?")){
    userChoice = userChoice.concat(upperLetters);
  }
  if(confirm("Will your password contain special charactors")){
    userChoice = userChoice.concat(characters);
  }
  if(confirm("Will your password contain numbers")){
    userChoice = userChoice.concat(numbers);
  }
  return true;
}



// Write password to the #password input
function writePassword() {
     var truePrompts = userPrompts();
  
    if(truePrompts){   
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
      passwordText.value = password;
    }  
}