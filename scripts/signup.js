console.log('hi')
const $ = (selector) => document.querySelector(selector);
const $get =  (selector) => document.getElementById(selector);


function checkuname (){
    var uname = $('#uname');
    if (uname.value  == ''){
        
        uname.nextElementSibling.textContent = "Please input value";
        uname.nextElementSibling.style.color = "red";
        uname.style.borderColor= "red";
        return false;
        }
    
    else if (uname.value.length < 5){
        uname.nextElementSibling.textcontent='Please enter at least 5 charater';
        uname.nextElementSibling.style.color ="red";
        uname.value="";
        uname.style.bordercolor = 'red';
        return false
    }
    else if (!uname.value.match(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/)) {
        uname.nextElementSibling.textContent= 'Username must contain at least one letter and one digit';
        uname.nextElementSibling.style.color = 'red';
        uname.value = ''; 
        uname.style.borderColor = 'red';
        return false;
    }

    else {;
        uname.nextElementSibling.style.color = 'grey' ;
        uname.nextElementSibling.textContent = "";
        return true;
    }

    
}

function checkpassword(){
    var password = $('#pw');
    var reneterPassword =$('#repw');
    if (password.value  == ''){
        password.nextElementSibling.textContent = "Please input value";
        reneterPassword.nextElementSibling.textContent = "";
        password.nextElementSibling.style.color = "red";
        password.style.borderColor = 'red';
        return false;
        }
    
    else if (password.value.length < 8){
        password.nextElementSibling.textContent ="Please enter at least 8 charater";
        password.nextElementSibling.style.color= "red";
        reneterPassword.value = "";
        password.value="";
        password.style.borderColor = 'red';
        return false;
    }
    else if (!password.value.match(/^(?=.*[A-Z])(?=.*\d).{9,}$/)){
        password.nextElementSibling.textContent ="Password must contain at least one Upper case letter and one digit";
        password.nextElementSibling.style.color= "red";
        reneterPassword.value="";
        password.value="";
        password.style.borderColor = 'red';
        return false ;
    }
    else {
        password.style.borderColor = 'grey';
        password.nextElementSibling.textContent = ""
        return true;}
} 

function checkRenterpw() {
    var password = $('#pw');
    var reneterPassword =$('#repw');
    console.log (password.value);
    console.log(reneterPassword.value);
        if (reneterPassword.value  == ''){
            reneterPassword.nextElementSibling.textContent = "Please input value";
            reneterPassword.nextElementSibling.style.color = "red";
            reneterPassword.style.borderColor= "red";
            return false ;
            }
        else if (reneterPassword.value != password.value){
            reneterPassword.nextElementSibling.textContent="Please enter same password";
            reneterPassword.value="";
            reneterPassword.nextElementSibling.style.color ="red";
            reneterPassword.style.borderColor = "red";
            return false;
        }
        else
        {   
            reneterPassword.style.borderColor = "grey";
            reneterPassword.nextElementSibling.textContent = "";
            password.style.borderColor = 'grey';
            password.nextElementSibling.textContent = "";
            return true;
        }
    }
    



function checktel() {
    var phone = $('#phone');
    if (phone.value  == ''){
        phone.nextElementSibling.textContent = "Please input value";
        phone.nextElementSibling.style.color = "red";
        phone.style.borderColor= "red";
        return false ;
        }
    else if (phone.value.length <10){
        phone.nextElementSibling,textcontent = 'Please enter a least 10 digit';
        phone.nextElementSibling.style.color ="red";
        phone.value = "";
        phone.style.borderColor="red";
        return false ;
    }
    else { 
        phone.style.borderColor = 'grey';
        phone.nextElementSibling.textContent = "";
        return true; return true;
    }
}

function checkContent(selector) {
    var select = $(selector);
    if (select.value == "") {
        select.nextElementSibling.textContent = "Please input value";
        select.nextElementSibling.style.color = "red";
        select.style.borderColor = "red";
        return false;
    } else {
        select.style.borderColor = 'grey';
        select.nextElementSibling.textContent = "";
        return true;
    }
}

function checkPostalCode(){
    var postalCode = $('#postalcode');
    if (postalCode.value.length!=6){
        postalCode.nextElementSibling.textContent = "Please Enter A Valid Postal Code"
        postalCode.value = "";
        postalCode.nextElementSibling.style.color ="red";
        postalCode.style.borderColor="red";

        return false ;
    }
    else if (postalCode.value.includes(" ")){
        postalCode.nextElementSibling.textContent = "Please Enter A Valid Postal Code"
        postalCode.value = "";
        postalCode.nextElementSibling.style.color ="red";
        postalCode.style.borderColor="red";
        return false ;}
    else{
            postalCode.style.borderColor = 'grey';
            postalCode.nextElementSibling.textContent = "";
            return true;
    }

}

function checkform() {
    //construct the const for the element of the form 
    console.log('hi there');

    //checkform function
    var unameConfirm = checkuname();
    console.log(unameConfirm);
    var pwConfirm = checkpassword();
    console.log(pwConfirm);
    var repwConfirm = checkRenterpw();
    console.log(repwConfirm);
    var phoneConfirm = checktel();
    console.log(phoneConfirm)
    var postalCodeConfirm = checkPostalCode();
    console.log(postalCodeConfirm)
    var fnameComfirm = checkContent('#fname');
    var lnameComfirm = checkContent('#lname');
    var addressComfirm = checkContent('#address');

    if (unameConfirm && pwConfirm && repwConfirm  && phoneConfirm && postalCodeConfirm && fnameComfirm && lnameComfirm && addressComfirm){

        location.href  = "/login/userprofile.html";
    }


}







document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#submit').addEventListener('click', checkform);
      });