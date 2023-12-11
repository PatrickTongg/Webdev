import { generateAd, imagesForItems } from "./adGenerator.js";

let $ = (id) => {return document.getElementById(id)}
document.addEventListener('DOMContentLoaded', function() {
window.onload = () => {
    generateAd();
    $("upload-btn").addEventListener('click', uploadItem);
    document.getElementsByClassName("feature-add")[0].addEventListener('click', addFeature);
}})

function uploadItem() {
    let items = JSON.parse(localStorage.getItem("items"));
    let id = 0;
    if (items.length > 0) {
        id = items[items.length - 1].id;
    }
    let name = $("item-title").value;
    let description = $("item-description").value;
    let price = Number.parseInt($("item-price").value);
    let featureList = $("feature-list").children;
    let features = [];
    for(let featureItem of featureList) {
        let feature = featureItem.firstElementChild.value;
        if (feature != null && feature.replaceAll(/\s/g,'') != "")
            features.push(feature);
    }
    let newItem = {
        id: ++id,
        name: name,
        description: description,
        price: price,
        features: features,
        images:[imagesForItems()[Math.round(Math.random() * 7)]]
    };
    items.push(newItem);
    localStorage.setItem("currentItem", id)
    localStorage.setItem("items", JSON.stringify(items));
}

function addFeature() {
    let features = $("feature-list");
    let result = "";
    result += '<li class="ftrs">';
    result += '<input type="text">';
    result += '<input type="button" class="feature-add ftr-btn" value="+">';
    result += '<input type="button" class="feature-remove ftr-btn" value="x">';
    result += '</li>';
    features.innerHTML += result;

    let featureAddBtn = document.getElementsByClassName("feature-add");
    let featureRemoveBtn = document.getElementsByClassName("feature-remove");

    for(let i = 0; i < featureAddBtn.length; i++) {
        featureAddBtn[i].addEventListener('click', addFeature);
        if (i != 0)
            featureRemoveBtn[i - 1].addEventListener('click', removeFeature);
    }
}

function removeFeature() {
    let features = $("feature-list");
    features.removeChild(this.parentNode);
}