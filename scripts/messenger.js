
window.onload = () => {
    addEventsToDeleteBtns();
    addEventsToMsgTypes();
}

function removeMessage() {
    this.parentElement.parentElement.style.display = "none"; 
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