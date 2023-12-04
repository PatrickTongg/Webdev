
import items from '../database/items.json' assert { type: 'json' };

    
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.getElementById(selector);
    const rest =()=> $('form').reset();

    //get items to local storage
    let import_items= JSON.stringify(items);
    localStorage.setItem("items",import_items);
    console.log(import_items);
    //get user data from local storage
    if (localStorage.getItem("users") === null) {
        let result = []
        window.localStorage.setItem('users',JSON.stringify(result))
    }
    const users = JSON.parse(window.localStorage.getItem('users'));
    console.log(users);


   
    
    
    const checkProcess = () => {
        const pw = $('#password');
        const ac = $('#username')
        let acPass = false
        let pwPass = false

        if (ac.value  == ''){
            ac.nextElementSibling.textContent = "User Name is empty";
            pw.nextElementSibling.textContent = "";
            ac.nextElementSibling.style.color = "red";
            $("#username").style.borderColor= "red";
            $("#password").style.borderColor= "red";
            rest();
            return;
            }
        else if (ac.value.length<5){
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
        else {acPass=true;}
        

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
        else {pwPass=true;}

        if (acPass&&pwPass){
            sortLoginUserDataLocation();
            location.href  = "/login/userprofile.html";
        }
        }


        function sortLoginUserDataLocation(){
            const ac = $('#username')
            var users = JSON.parse(window.localStorage.getItem('users'));
            for (let user of users){
                if (user.username == ac.value){
                    let result = JSON.stringify(user)
                    console.log(result)
                    window.localStorage.setItem('LoginUser',result);

                }
            }

        }

    

    
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#submit').addEventListener('click', checkProcess);
          });
