document.addEventListener('DOMContentLoaded', function() {
    function $(selector){
        return document.querySelector(selector);
    } 

    function to_Login() {
        window.location = "/login/loginpage.html";
    }

    $('#login-btn').addEventListener('click', to_Login);
});