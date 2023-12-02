const $ = (selector) => document.querySelector(selector);
const $get =  (selector) => document.getElementById(selector);

// Check if the sign up deatial is value
// Check Username
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
// Check password
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
// check reenter Password
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
    


//check phone number
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
//check content for name, address is filled
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
//check postal code
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
//check signupform
function checkform() {
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
    var fnameConfirm = checkContent('#fname');
    var lnameConfirm = checkContent('#lname');
    var addressConfirm = checkContent('#address');



    if (unameConfirm && pwConfirm && repwConfirm  && phoneConfirm && postalCodeConfirm && fnameConfirm && lnameConfirm && addressConfirm){
        updateUserToLocalStorage();
    }

}


function updateUserToLocalStorage(){
    var userData = JSON.parse(window.localStorage.getItem('users'));
    var user = {username: $('#uname').value, password: $('#pw').value, phone: $('#phone').value, postalCode: $('#postalcode').value, fname: $('#fname').value, lname: $('#lname').value,address: $('#address').value};
    userData.push(user);
    localStorage.setItem('users',JSON.stringify(userData));
        }

function checkLocalStorage(){
    var userData = window.localStorage.getItem('users');
    if (userData == null ){
        localStorage.setItem('users',JSON.stringify([]));
    }
}
//Slidshow
$get("slide1").style.display = "none";
$get("slide2").style.display = "none";
$get("slide3").style.display = "none";
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
     
  for (i = 1; i < 4 ; i++) {
    var n = "slide"+i;
    $get(n).style.display = "none";
  }
  if (slideIndex == 3) {slideIndex = 0}
  slideIndex++;
  var index = "slide"+slideIndex;
  $get(index).style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}



window.onload = () => {checkLocalStorage()};

document.addEventListener('DOMContentLoaded', () => {
    // document.getElementsByClassName("fadeSlide").style.display = "block";
    document.querySelector('#submit').addEventListener('click', checkform);
      });