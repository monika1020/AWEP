
let counter = 1;
function increment() {
    let countere = document.querySelector("#M");
    counter = counter + 1;
    countere.innerHTML = counter;
}
function decrement() {
    let countere = document.querySelector("#M");
    counter = counter - 1;
    countere.innerHTML = counter;
}