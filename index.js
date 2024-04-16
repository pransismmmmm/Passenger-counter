let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.textContent = count;  
}

function save() {
    let saveCount = count + " - ";
    saveEl.textContent += saveCount;
    count = 0;
    countEl.textContent = count;
}

// let username = "per";
// let message = "You have three new notifications";
// let messageToUser = message + ", " + username + "!"; 

// let welcomeEl = document.getElementById("welcome-el");

// let name = "Francis";
// let greeting = "Welcome back ";
// welcomeEl.innerText = greeting + name;