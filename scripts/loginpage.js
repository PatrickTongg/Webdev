    const users = [{username:'patricktongg',password:'12345678'}]
    const $ = (selector) => document.querySelector(selector);
    
    const $$ = (selector) => document.getElementById(selector);

    const rest =()=>{
        $('form').reset();
    }
    
    const checkprocess = () => {
        const pw = $('#password');
        const ac = $('#username')
        let acpass = false
        let pwpass = false

        if (ac.value  == ''){
            ac.nextElementSibling.textContent = "User Name is empty";
            pw.nextElementSibling.textContent = "";
            ac.nextElementSibling.style.color = "red";
            $("#username").style.borderColor= "red";
            $("#password").style.borderColor= "red";
            rest();
            return;
            }
        else if (ac.value.length<8){
            ac.nextElementSibling.textContent = "UserName too short";
            pw.nextElementSibling.textContent = "";
            ac.nextElementSibling.style.color = "red";
            $("#username").style.borderColor= "red";
            $("#password").style.borderColor= "red";
            rest();
            return;

        } else if (!users.some(user => user.username === ac.value)) {
            ac.nextElementSibling.textContent = "UserName not found";
            pw.nextElementSibling.textContent = "";
            ac.nextElementSibling.style.color = "red";
            $("#username").style.borderColor= "red";
            $("#password").style.borderColor= "red";
            rest();
            return;}
        else {acpass=true;}
        

        if (pw.value == ''){
            ac.nextElementSibling.textContent = "";
            pw.nextElementSibling.textContent = "Password is empty";
            $("#password").style.borderColor= "red";
            $("#username").style.borderColor= "black";
            }
        else if (pw.value.length<8){
            ac.nextElementSibling.textContent = "";
            pw.nextElementSibling.textContent = "Password too short";
            $("#password").style.borderColor= "red";
            $("#username").style.borderColor= "black";
            }
        else if (pw.value != users.find(user => user.username === ac.value).password){
            ac.nextElementSibling.textContent = "";
            pw.nextElementSibling.textContent = "Wrong Password";
            pw.nextElementSibling.style.color = "red";
            $("#password").style.borderColor= "red";
            $("#username").style.borderColor= "black";
            }
        else {pwpass=true;}

        if (acpass&&pwpass){
            location.href  = "/login/userprofile.html";
        }
        }


    
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#submit').addEventListener('click', checkprocess);
          });
