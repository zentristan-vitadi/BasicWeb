const form = document.getElementById("myForm")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

const nameError = document.getElementById(nameError)
const emailError = document.getElementById(emailError)
const passwordError = document.getElementById(passwordError)

form.addEventListener("submit", function(e){
    e.preventDefault(); //agar tidak reload page
    //reset pesan eror
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    
    //validasi nama
    if (nameInput.value.trim() === ""){
        nameError.textContent = "Input Your First!"
    }
})



// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     validateInputs();
// })
