const form = document.querySelector(".form");
const select = document.querySelector(".choose");
const option = select.value;

const USER_COUNTRY = "Country";
const CHOOSE_CN = "choose";

function saveCountry(option) {
    localStorage.setItem(USER_COUNTRY, option);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = select.value;
    saveCountry(currentValue);
    
}

function askForCountry() {
    form.classList.add(CHOOSE_CN);
    form.addEventListener("change", handleSubmit);
}

function init() {
    askForCountry();
}

init();
