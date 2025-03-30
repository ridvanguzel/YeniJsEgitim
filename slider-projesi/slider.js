const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const imagesWrapper = document.querySelector('.image-wrapper');
const imagesLength = document.querySelectorAll('img');

let currentImage = 1;
let timeout;

prevBtn.addEventListener('click', () =>{
    currentImage--;
    clearTimeout(timeout);
    updateImage();

})
nextBtn.addEventListener('click', () =>{
    currentImage++;
    clearTimeout(timeout);
    updateImage();
})


// currentImage - 1: Çünkü index numaraları 0'dan başlar ama  sayacı 1'den başlattım
// Yani currentImage = 1 olduğunda translateX(0) olur → ilk resim görünecek
// currentImage = 2 olduğunda (2 - 1) * 700 = 700 → translateX(-700px) → ikinci resim görünür.
// Eksi (-) işareti: sola kaydırmak için kullanılır. Çünkü translateX(-700px) demek, 700px sola kaydır anlamına gelir. Pozitif olsaydı sağa kayardı.

function updateImage(){
        if(currentImage > imagesLength.length){
            currentImage = 1;
        }else if(currentImage < 1){
            currentImage = imagesLength.length;
        }
        imagesWrapper.style.transform = `translateX(-${(currentImage - 1) * 700}px)`; 

        timeout = setTimeout(() => {
                currentImage++;
                updateImage();
        }, 4000);
}

updateImage();

