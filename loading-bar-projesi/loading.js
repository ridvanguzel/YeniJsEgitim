const loadingCounter = document.querySelector('.loading-counter');
const loadingBarFront = document.querySelector('.loading-front');

let counter = 0;

function updateNumber(){
    loadingCounter.textContent = counter + '%';
    loadingBarFront.style.width = counter + '%';
    counter++;
    if(counter < 101){
    setTimeout(updateNumber, 15)
    }
}

updateNumber();