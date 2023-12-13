function changeToUserLogo(){
    function $$(selector){
        return document.getElementById(selector);
    } 
    try {
        user = JSON.parse(localStorage.getItem("LoginUser"));
      } catch (error) {
        return;
      }
    console.log(user.username)
    if (user.username!=null){
        console.log(document.querySelector("#login-link").innerHTML);

        let result ='<a href="/index.html"> <img id="logout-btn" class="topIcon" src="/public/images/logout_icon.png" alt="logout" onclick="to_Logout()"></a>';
        result +='<a href="/login/userprofile.html">';
        result +='<img id="user-icon" class="topIcon"  src="/public/images/user-icon.png" alt="user"></a>';
        document.getElementById("login-link").innerHTML=result;
    } 
}

function to_Login() {
    window.location = "/login/loginpage.html";
}
function to_Logout() {
    window.localStorage.removeItem('LoginUser');
}
document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#login-btn').addEventListener('click', to_Login);
    window.onload = changeToUserLogo();
});
