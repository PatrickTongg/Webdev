import items from '../database/items.json' assert { type: 'json' };

export function generateAd() {
    const adContainer = document.getElementsByClassName("ad-container")[0];
    for (let i = 0; i < 3; i++) {
        let rand = Math.round(Math.random() * 6);
        let item = items[rand];
        let result = "";
        result += '<div class="ad">'
        result += '<img class="ad-img"' + 'src="' + item.images[0] +'">';
        result += description(item);
        result += '</div>'
        adContainer.innerHTML += result;

    }
}

function description(item) {
    return `<div class="ad-desc">
    <a href="item-page.html" class="ad-title">${item.name}</a>
    <div class="ad-price">${item.price}</div>
    <button type="submit" class="ad-contact">Contact seller</button>
    </div>`;
}