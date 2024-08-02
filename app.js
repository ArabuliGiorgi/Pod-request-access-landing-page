const input = document.getElementById("myinput");
const error = document.getElementById("error-message");

input.addEventListener("change", () => {
    error.textContent = "";
});

function check(){
    if(input.value.trim() == ""){
        error.textContent = "Please provide your email";
    }else if(!input.value.trim().endsWith('@gmail.com')){
        error.textContent = "Oops! Please check your email";
    }else if(input.value.trim().length < 15){
        error.textContent = "Oops! Email is too short. Try again!";
    }
}