let passwordBox = document.querySelector("#password");
let btn = document.querySelector(".button")
let copyBtn = document.querySelector(".copyBtn")
const length = 8;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "012456789"
let special = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';

let allChare = upperCase + lowerCase + number  ;

function generatePassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += special[Math.floor(Math.random() * special.length)]

  for (let i = 0; i < length; i++) {
    password += allChare.charAt(
      Math.floor(Math.random() * allChare.length)
    );
  }
    passwordBox.value = password

}

copyBtn.addEventListener("click", () => {
    passwordBox.select();
    document.execCommand("copy");
  });