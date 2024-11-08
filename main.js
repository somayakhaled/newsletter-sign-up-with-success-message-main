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
        mainContainer.classList.add('scale-0');
        setTimeout(() => {
            mainContainer.style.display = "none";
            successContainer.style.display = "flex";
            successContainer.classList.add('scale-1');
        }, 1000)
        inputEmail.innerHTML = email.value;
    }
})

successBtn.addEventListener('click', () => {
    successContainer.classList.remove('scale-1');
    mainContainer.style.display = "flex";
    successContainer.style.display = "none";
    email.value = "";

    setTimeout(() => {
        mainContainer.classList.remove('scale-0');
    }, 1000)
})

email.addEventListener('input', () => {
    errorMgs.style.display = "none";
    errorMgs.innerHTML = "";
    email.style.borderColor = "";
    email.style.backgroundColor = "";
})