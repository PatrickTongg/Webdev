import items from '../database/items.json' assert { type: 'json' };
import { generateAd } from './adGenerator.js';
document.addEventListener('DOMContentLoaded', function() {
window.onload = () => {
    loadItem();
    generateAd();
}})

function loadItem() {
    let itemId = localStorage.getItem("currentItem");
    let primaryItem = null;
    if (itemId == null) {
        primaryItem = items[0];
    } else {
        let allItems = JSON.parse(localStorage.getItem("items"));
        primaryItem = allItems.filter(item => item.id == itemId)[0];
    }

    let itemName = document.getElementById("item-name");
    itemName.innerHTML = primaryItem.name;

    let itemPrice = document.getElementById("price");
    itemPrice.innerHTML = primaryItem.price + "$";

    let photoContainer = document.getElementsByClassName("item-photo")[0];
    let imageContent = "";
    imageContent += "<div>";
    imageContent += '<img id="main-item-photo" src="' + primaryItem.images[0] + '" alt="iphone">';
    imageContent += "</div>";
    imageContent += '<div class="side-photos">';
    for (let i = 1; i < primaryItem.images.length; i++) {
        imageContent += '<img class="side-item-photo" src="' + primaryItem.images[i] + '" alt="iphone">';
    }
    imageContent += "</div>";
    photoContainer.innerHTML += imageContent;

    let description = document.getElementById("description");
    description.innerHTML += primaryItem.description;

    let featureList = document.getElementsByClassName("ft-list")[0];
    for (let feature of primaryItem.features) {
        let result = "<li>" + feature + "</li>";
        featureList.innerHTML += result;
    }

}