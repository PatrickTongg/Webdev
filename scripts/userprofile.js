
var items = JSON.parse(window.localStorage.getItem('items'))
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector);


//create html for the items
function createItemList(){
    var soldItem = $$('#soldItems')
    var result;
    for (let item of items){
        result += " <div class="product"><img class="productImage" src="/public/images/laptop.png" alt="laprop">
        <a href="item-page.html" class="productLink"></a>
        <div class="product_price">$750</div></div>"
    
    }
    soldItem.innerHTML += result; 
}
//create html for the personal info
function createInfo(){

}
window.onload = () => {
    createItemList()
}