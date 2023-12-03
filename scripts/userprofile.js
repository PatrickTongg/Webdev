
var items = JSON.parse(window.localStorage.getItem('items'))
var users = JSON.parse(window.localStorage.getItem('users'))
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector);

//function: create html for the items
function createSoldItemList(){
    var soldItem = $$('soldItems')
    var result = '';
    for (let item of items){
        result += '<div class="product"><img class="productImage" src="'+item.images[0]+'" alt='+item.name+'><a href="/items/item-page.html" class="productLink">'+item.name+'</a><div class="product_price">$'+item.price+'</div></div>';
    }
    soldItem.innerHTML += result; 
}

function createBuyItemList(){
    var buyItems = $$('buyItems')
    var result = '';
    for (let item of items){
        result += '<div class="product"><img class="productImage" src="'+item.images[0]+'" alt='+item.name+'><a href="/items/item-page.html" class="productLink">'+item.name+'</a><div class="product_price">$'+item.price+'</div></div>';
    }
    buyItems.innerHTML += result; 
}
//function: create html for the personal info
function createInfo(){
    var userInfo = $$('info')
    var userDetail = $$('detail')
    var LoginUser = JSON.parse(window.localStorage.getItem('LoginUser'))
    let userInfoHTML = ''
    let userDetailHTML =''
    userInfoHTML = ' <img class="icon_standard" src="/public/images/profile_pic.png"alt="profile picture"><div><ul><li>User Name: '+LoginUser.username+' </li><li>Phone Number: '+LoginUser.phone+'</li></ul></div>'
    userDetailHTML=' <h1>Personal Details</h1><ul><li>Address: '+LoginUser.address+'</li><li>Postal Code:'+LoginUser.postalCode+'</li><li>Full Name: '+LoginUser.fname+' '+LoginUser.lname+'</li><li>Email: '+LoginUser.email+'</li><li> <button id="editDetail" class="privacy">Edit Details</button></li></ul>'
    
    userInfo.innerHTML = userInfoHTML;
    userDetail.innerHTML = userDetailHTML;

}

//function: convert detail into html form and save to local storage while done
function enableEdit(){
    var userDetail = $$('detail');
    var editFormHTML = '';
    editFormHTML='<form><ul><li>Address:<input type="text" value="'+LoginUser.address+'"></li><li>Postal Code:<input type="text" value="'+LoginUser.postalCode+'" max="6"></li><li>Full Name:<input type="text" value="'+LoginUser.fname+' '+LoginUser.lname+'"></li><li>Email: <input type="text" value="'+LoginUser.email+'"></li><li> <button id = "done" class="done"</ul></form>'
    userDetail.innerHTML = editFormHTML;
    }
function doneEdit(){
    var LoginUser = JSON.parse(window.localStorage.getItem('LoginUser'))
    var users = JSON.parse(window.localStorage.getItem('users'));
    var updatedInfo ="";

    for (let user of users){
        if (user.username == LoginUser.username&&user.password == LoginUser.password){
            
            let result = JSON.stringify(user)
            window.localStorage.setItem('LoginUser',result);

        }
    }
}

//add function as onload and addlistener
window.onload = () => {
    createSoldItemList()
    createBuyItemList()
    createInfo()
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#editDetail').addEventListener("click",enableEdit);
      });

