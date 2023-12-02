import { generateAd } from "./adGenerator.js";

window.onload = () => {
    generateAd();
    generateMessages();
    addEventsToDeleteBtns();
    addEventsToMsgTypes();
}

function removeMessage() {
    let element = this.parentElement.parentElement;
    element.style.display = "none";
    let id = Number.parseInt(element.id.substring(4));
    let items = JSON.parse(localStorage.getItem("items"));
    let index = 0;
    for (let i = 0; i < items.length; i++) {
        if(items[i].id == id) {
            index = i;
            break;
        }
    }
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
}

function highlightMsgType() {
    let msgTypes = document.getElementsByClassName("msg-types");
    for(let i = 0; i < msgTypes.length; i++) {
        msgTypes[i].id = "";
    }

    this.id = "active-msg";
}

function addEventsToDeleteBtns() {
    let deleteBtns = document.getElementsByClassName("delete-btn");
    for(let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener("click", removeMessage);
    }
}

function addEventsToMsgTypes() {
    let msgTypes = document.getElementsByClassName("msg-types");
    for(let i = 0; i < msgTypes.length; i++) {
        msgTypes[i].addEventListener("click", highlightMsgType);
    }
}

function generateMessages() {
    let items = JSON.parse(localStorage.getItem("items"));
    let msgContainer = document.getElementsByClassName("msg-container")[0];
    let result = "";

    for (let i = 0; i < items.length; i++) {
        result += '<div class="msg-row" id="item' + items[i].id +'">';
        result += '<div class="msg-info">';
        result += '<div class="item-info">';
        result += '<img class="item-ph" src="' + items[i].images[0] + '" alt="iphone">';
        result += '<div class="item-desc">';
        result += '<div>' + items[i].name + '</div>';
        result += '<div>Mark</div>';
        result += '<div class="item-price">' + items[i].price + '$</div>';
        result += '</div>';
        result += '</div>';
        result += '<div class="msg">';
        result += '<p>Hi! I would like to buy your ' + items[i].name + '</p>';
        result += '</div>';
        result += '</div>';
        result += '<div class="delete">';
        result += '<button class="delete-btn"><img class="delete-btn-img" src="/public/images/delete.png" alt="delete"></button>';
        result += '</div>';
        result += '</div>';
    }

    msgContainer.innerHTML += result;
}