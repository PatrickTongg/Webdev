import { generateAd, imagesForItems } from "./adGenerator.js";

let $ = (id) => {return document.getElementById(id)}

window.onload = () => {
    generateAd();
    $("upload-btn").addEventListener('click', uploadItem);

}

function uploadItem() {
    let items = JSON.parse(localStorage.getItem("items"));
    let id = 0;
    if (items.length > 0) {
        id = items[items.length - 1].id;
    }
    let name = $("item-title").value;
    let description = $("item-description").value;
    let price = Number.parseInt($("item-price").value);
    let newItem = {
        id: ++id,
        name: name,
        description: description,
        price: price,
        features:[],
        images:[imagesForItems()[Math.round(Math.random() * 7)]]
    };
    items.push(newItem);
    localStorage.setItem("currentItem", id)
    localStorage.setItem("items", JSON.stringify(items));
}