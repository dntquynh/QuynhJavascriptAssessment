const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})

const sendData = (usernameVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hello " + usernameVal , "You are registered!", "success");
    }
}

const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}

function isEmail(emailVal) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailVal);
}

function Validate(){
    const usernameVal = username.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //username
    if(usernameVal === ""){
        setErrorMsg(username, 'First name cannot be blank!');
    }
    else if(usernameVal.length <=1){
        setErrorMsg(username, 'First name needs to be at least 2 characters!');
    }
    else{
        setSuccessMsg(username);
    }

    //last name

    if(lastnameVal === ""){
        setErrorMsg(lastname, 'Last name cannot be blank!');
    }
    else if(lastnameVal.length <=1){
        setErrorMsg(lastname, 'Last name needs to be at least 2 characters!');
    }
    else{
        setSuccessMsg(lastname);
    }

    //email
    if(emailVal === ""){
        setErrorMsg(email, 'Email cannot be blank!');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Email is not valid!');
    }
    else{
        setSuccessMsg(email);
    }

    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'Password cannot be blank!');
    }
    else if(passwordVal.length <= 5){
        setErrorMsg(password, 'Password needs to be at least 6 characters!');
    }
    else{
        setSuccessMsg(password);
    }

    //confirm password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Confirm password cannot be blank!');
    }
    else if(cpasswordVal.length <= 5){
        setErrorMsg(cpassword, 'Confirmed password needs to be at least 6 characters!');
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'Password does not match!');
    }
    else{
        setSuccessMsg(cpassword);
    }
    SuccessMsg(usernameVal);


}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
