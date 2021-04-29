//Select HTML-Elements
const generate_btn = document.querySelector(".generate_btn");
const length_selector = document.querySelector("#length_selector");
const output_field = document.querySelector(".output_field");

//Array with signs
const password_signs = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2",
    "3", "4", "5", "6", "7", "8", "9", "!", "?"];
let final_password = "";
//Eventlisteners
generate_btn.addEventListener("click", generate_password);

//Functions
function generate_password() {
    let num_signs = length_selector.value;
    for (let i = 0; i < num_signs; i++) {
        let random_sign = password_signs[Math.floor(Math.random() * 64)];
        final_password += random_sign;
    }
    console.log(final_password);
    output_field.innerText = final_password;
    final_password = "";
}