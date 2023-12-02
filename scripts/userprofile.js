
var items = JSON.parse(window.localStorage.getItem('items'))
var users = JSON.parse(window.localStorage.getItem('users'))
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector);

console.log(users)

//create html for the items
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
        console.log(result);
    }
    buyItems.innerHTML += result; 
}
//create html for the personal info
function createInfo(){


}
window.onload = () => {
    createSoldItemList()
    createBuyItemList()

}