
let welcomeEl = document.getElementById("welcome-el");
let counter = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let saveEl = document.getElementById("save-el");
let count = 0;


saveEl.innerText="Previous entries: ";

function increment(){
    count += 1;
    counter.innerText = count;
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    counter.innerText = count;

    let total = saveEl.innerText
        .split(' ')
        .reduce((acc,el) => 
            !Number.isNaN(el * 1) ? acc = acc + el * 1 : acc
            , 0);
    totalEl.innerText = "total:  " + total;
}



