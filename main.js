let btn = document.getElementById('btn');
let email = document.getElementById('email');
let errorMgs = document.querySelector('.error');
let mainContainer = document.querySelector('.container');
let successContainer = document.querySelector('.success');
let successBtn = document.getElementById('successBtn');
let inputEmail = document.getElementById('inputEmail');

btn.addEventListener('click', (e) => {
    let emailValid = true; 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value === ""){
        emailValid = false;
        errorMgs.style.display = "block";
        errorMgs.innerHTML = "Valid email required";
        email.style.borderColor = "hsl(4, 100%, 67%)";
        email.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
    }
    else if(!emailPattern.test(email.value)){
        emailValid = false;
        errorMgs.style.display = "block";
        errorMgs.innerHTML = "Valid email required";
        email.style.borderColor = "hsl(4, 100%, 67%)";
        email.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
        console.log("pattern error");
    }

    if(!emailValid){
        e.preventDefault();
    } else{
        inputEmail.innerHTML = email.value;
        mainContainer.style.display = "none";  
        successContainer.style.display = "flex";  
    }
})

successBtn.addEventListener('click', () => {
    email.value = "";
    mainContainer.style.display = "flex";  
    successContainer.style.display = "none";  
})

email.addEventListener('input', () => {
    errorMgs.style.display = "none";
    errorMgs.innerHTML = "";
    email.style.borderColor = "";
    email.style.backgroundColor = "";
})