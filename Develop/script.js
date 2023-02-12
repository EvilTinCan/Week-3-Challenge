// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "&", "*", "?"]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
var pwLength = window.prompt("How long do you want your password to be?");
if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)){
  window.alert("Length must be a number between 8 and 128 characters")
  return "WRONG!"
}
console.log(pwLength)
var useLower = window.confirm("Would you like to use lowercase?")
var useUpper = window.confirm("Would you like to use uppercase?")
var useNumber = window.confirm("Would you like to use numbers?")
var useSpecial = window.confirm("Would you like to use special characters?")

var useChars = []
if (useLower){
  useChars.push(...lower)
} 
if (useUpper){
  useChars.push(...upper)
}
if (useNumber){
  useChars.push(...number)
}
if (useSpecial){
  useChars.push(...special)
}


console.log(useChars)

var pwString = ""


for ( var i = 0; i < pwLength; i++){
  var randomNumber = Math.floor(Math.random() * useChars.length);
 password += useChar(randomNumber, randomNumber +1);
}

document.getElementById("password").value = password;




  return pwString
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
