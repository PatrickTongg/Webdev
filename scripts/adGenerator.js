import items from '../database/items.json' assert { type: 'json' };

export function generateAd() {
    const adContainer = document.getElementsByClassName("ad-container")[0];
    for (let i = 0; i < 3; i++) {
        let rand = Math.round(Math.random() * 6);
        let item = items[rand];
        let result = "";
        result += '<div class="ad">';
        result += '<img class="ad-img" src="' + item.images[0] +'">';
        result += description(item);
        result += '</div>';
        adContainer.innerHTML += result;

    }

    addEventsToAds();
}

export function imagesForItems() {
    let result = [];
    for (let item of items) {
        result.push(item.images[0]);
    }
    return result;
}

function description(item) {
    return `<div class="ad-desc">
    <a href="item-page.html" id="item${item.id}" class="ad-title">${item.name}</a>
    <div class="ad-price">${item.price}$</div>
    <button type="submit" class="ad-contact">Contact seller</button>
    </div>`;
}

function addEventsToAds() {
    let ads = document.getElementsByClassName("ad-title");

    for (let ad of ads) {
        ad.addEventListener("click", chooseItem);
    }
}

function chooseItem() {
    let id = Number.parseInt(this.id.substring(4));
    localStorage.setItem("currentItem", id);
}