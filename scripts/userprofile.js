
var items = JSON.parse(window.localStorage.getItem('items'))
var users = JSON.parse(window.localStorage.getItem('users'))
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector);

//function: create html for the items
function createSoldItemList(){
    var soldItem = $$('soldItems')
    var result = '';
    for (let item of items){
        result += '<div class="product" id="'+item.id+'"><img class="productImage" src="'+item.images[0]+
        '" alt='+item.name+'><a href="/items/item-page.html" class="productLink">'+item.name+
        '</a><div class="product_price">$'+item.price+'</div></div>';
    }
    soldItem.innerHTML += result; 
}

function createBuyItemList(){
    var buyItems = $$('buyItems')
    var result = '';
    for (let item of items){
        result += '<div class="product" id="'+item.id+'"><img class="productImage" src="'+item.images[0]+
            '" alt='+item.name+'><a href="/items/item-page.html" class="productLink">'+item.name+
            '</a><div class="product_price">$'+item.price+'</div></div>';
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
    userInfoHTML = ' <img class="icon_standard" src="/public/images/profile_pic.png"alt="profile picture"><div><ul><li>User Name: '+LoginUser.username+
                    ' </li><li>Phone Number: '+LoginUser.phone+'</li></ul></div>'
    userDetailHTML=' <h1>Personal Details</h1><ul><li>Address: '+LoginUser.address+
                        '</li><li>Postal Code:'+LoginUser.postalCode+
                        '</li><li>Full Name: '+LoginUser.fname+' '+LoginUser.lname+
                        '</li><li>Email: '+LoginUser.email+
                        '</li><li><input type="button" id="editDetail" class="privacy" value="Edit Details" ></li></ul>'
    
    userInfo.innerHTML = userInfoHTML;
    userDetail.innerHTML = userDetailHTML;

}

//function: convert detail into html form and save to local storage while done
function enableEdit(){
    var userDetail = $$('detail');
    var LoginUser = JSON.parse(window.localStorage.getItem('LoginUser'));
    var editFormHTML = '';
    editFormHTML=
    ' <h1>Personal Details</h1><form><ul><li><label for="address">Address:</label><input type="text" id="address" value="'+LoginUser.address+
    ' " required></li><li><label for="postalCode">Postal Code:</label><input type="text" id="postalCode" value="'+LoginUser.postalCode+
    '" max="6" required ></li><li><label for="fname">First Name: </label><input type="text" id="fname" value="'+LoginUser.fname+
    '" required></li><li><label for="lname">Last Name: </label><input type="text" id="lname" value="'+LoginUser.lname+
    '"required></li><li>Email: <input type="text" id="email" value="'+LoginUser.email+
    '" required ></li><li> <input type="button" id="done" class="privacy" value="Done" onclick="doneEdit()"></ul></form>'
    userDetail.innerHTML = editFormHTML;
    }
function doneEdit(){
    var storedUser = JSON.parse(window.localStorage.getItem('LoginUser'))
    var usersData = JSON.parse(window.localStorage.getItem('users'));
    var updatedInfo = {
        username: storedUser.username,
        password: storedUser.password,
        phone: storedUser.phone,
        postalCode: $$('postalCode').value,
        fname: $$('fname').value,
        lname: $$('lname').value,
        address: $$('address').value,
        email: $$('email').value,
        };
        console.log(updatedInfo)
        window.localStorage.setItem('LoginUser',JSON.stringify(updatedInfo));
        createInfo()
        for (let i = 0; i<usersData.length;i++){
            if (usersData[i].username == storedUser.username && usersData[i].password == storedUser.password){
                usersData.splice(i,1)
                usersData.push(updatedInfo);
                window.localStorage.setItem('users',JSON.stringify(usersData));
            }
        }
    }
//select save selected items
function saveSelectedItems{
    let id = 
    let items = JSON.parse(localStorage.getItem("items"));
    let index = 0;
    for (let i = 0; i < items.length; i++) {
        if(items[i].id == id) {
            index = i;
            break;
        }
    }
    items.splice(index, 1); 
    window.localStorage.setItem('currentItem',JSON.stringify(result));
}

//add function as onload and addlistener
window.onload = () => {
    createSoldItemList()
    createBuyItemList()
    createInfo()
    $("#editDetail").addEventListener("click", enableEdit);
    // $$("done").addEventListener("click", doneEdit, false);
}

