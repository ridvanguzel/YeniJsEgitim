// const merhaba = document.querySelector('p');
// const merhaba = document.querySelector('.error');
// console.log(merhaba);
// const hata = document.querySelector('div.error');
// console.log(hata);


//const hatalar=querySelectorAll('p');
//console.log(hatalar);
//hatalar.forEach(hata =>{
//    console.log(hata);
//});




// const pdegeri=document.querySelector('p');
// console.log(pdegeri.innerText);
// pdegeri.innerText = 'Rıdvan Güzell';

// const ptum=document.querySelectorAll('p');
// ptum.forEach(a =>{
//     console.log(a.innerText);
//     a.innerText += 'Merhaba Canım';
// })


// const tumVeriler = document.querySelector('div.error');
// console.log(tumVeriler.innerHTML);

// tumVeriler.innerHTML += '<h2>Vue, React, Angular</h2>';


// const ogrencilerim = ['tuba', 'rıdvan', 'can'];
// ogrencilerim.forEach(b =>{
//     tumVeriler.innerHTML += `<p>${b}</p>`;
// })


//GETATTIRBUTE - SETATTRIBUTE

// const link=document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'http://www.ridvanguzel.com');
// link.textContent = 'Rıdvan Güzel'


// const pDegeri=document.querySelector('p');
// console.log(pDegeri.getAttribute('class'));
// pDegeri.setAttribute('class', 'error');
// pDegeri.setAttribute('style', 'color:red');

//GETATTIRBUTE - SETATTRIBUTE

// css e mudahale etmek

// const deneme = document.querySelector('p');
// console.log(deneme.style);
// deneme.style.padding = '50px';

// // css e mudahale etmek

// //css ekleme kaldırma
// const icerik = document.querySelector('p');
// console.log(icerik.classList);
// icerik.classList.add('merhaba');
// icerik.classList.remove('deneme');


// const pDegerim = document.querySelectorAll('p');
// pDegerim.forEach(element =>{
//     if(element.textContent.includes('error')){
//         element.classList.add('error');
//     }else if(element.textContent.includes('success')){
//         element.classList.add('success');
//     }
//     else{
//         element.innerHTML = "Merhaba"
//     }
// })
// //css ekleme kaldırma

// //PARENT CHILD

// const myDeger = document.querySelector('section');
// console.log(myDeger.children);
// console.log(Array.from(myDeger.children));

// Array.from(myDeger.children)

//PARENT CHILD


// EVENT LISTENER


const button = document.querySelector('button');

// button.addEventListener('click' , () =>{
//     console.log("Butona tıkladım")
// })


// const liElemanlari = document.querySelectorAll('li');
// liElemanlari.forEach(eleman => {
//     eleman.addEventListener('click', () =>{
//         console.log('Li elemanlarına tıkladım');
//     })
// })


const liElemanlari = document.querySelectorAll('li');
liElemanlari.forEach(eleman => {
    eleman.addEventListener('click', e=>{
        console.log(e.target)
        console.log('Li elemanlarına tıkladım');

    })
})

const ul = document.querySelector('ul');

ul.addEventListener('click', e=>{
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})


liElemanlari.forEach(eleman => {
    eleman.addEventListener('click', e=>{
            e.stopPropagation();
    //    e.target.remove();
    })
})
button.addEventListener('click' , () =>{
    const li = document.createElement('li');
    li.textContent='Javascript';


    ul.append(li) //sona ekler 
    ul.prepend(li)// basa ekler

})

// EVENT LISTENER


// <!-- MOUSEMOVE WHEELEVENT -->

const myMouse = document.querySelector('.kutu');
myMouse.addEventListener('mousemove', e=>{

    myMouse.textContent=`X KOORDİNATI : ${e.offsetX}, Y KOORDİNATI : ${e.offsetY}`

})

document.addEventListener('wheel', e=>{
    console.log(e.pageX, e.pageY);
})


// <!-- MOUSEMOVE WHEELEVENT -->

// <!-- POPUP KODU -->
 
const openModal = document.querySelector('.modaltikla');
const modalBody = document.querySelector('.main-popup');
const closeModel = document.querySelector('.popup-close');

openModal.addEventListener('click', ()=>{
    modalBody.style.display = 'block';
})

closeModel.addEventListener('click', ()=>{
    modalBody.style.display = 'none';
})

modalBody.addEventListener('click', e=> {


    console.log(e.target)

    if(e.target.className === 'main-popup'){
        modalBody.style.display = 'none';
    }

  
})
// <!-- POPUP KODU -->