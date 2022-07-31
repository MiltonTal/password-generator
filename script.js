//create the variables for the password
userLegnth = 10;
userChoice = [];
letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
lettersBig = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
characters = ["!","@","#","$","%","%","^","&","*","(",")","-","_","=","+","`","~","[","]","{","}","|",":",";","<",">","/","?",
];


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
//create the prompt for the users input
function generatePassword() {

}

function userPrompt(){
  userLegnth = parseInt(prompt("Plseas choose how long you would like your password to be, between 8 and 128."));
    if(isNaN(userLegnth) || userLegnth < 8 || userLegnth > 128){
      alert("");
      return false;
    }
    console.log(userLegnth)
}
      
  

//create the function logic for the password generator
