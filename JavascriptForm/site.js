// <!-- FORM SUBMIT EVENTI -->
const signUpForm = document.querySelector('.signUpForm');
const username = document.querySelector('#username');
const errorMessage = document.querySelector('.hata-mesaji');
const usernamePattern = /^[a-z]{4,10}$/;


// signUpForm.addEventListener('submit', e=>{
//     e.preventDefault();
//     // console.log('Form Gönderildi');
//     // console.log(username.value)
//     console.log(signUpForm.username.value)
// })

// <!-- FORM SUBMIT EVENTI -->

// <!-- regex YAZIM TARZI -->
const usernameRegex = '11canboz'

const pattern = /[a-z]{0,10}/;
let sonuc = pattern.test(usernameRegex);
// console.log(sonuc);
if (sonuc) {
    console.log('Başarılı');
} else {
    console.log('Başarısız');
}
let sonuc2 = usernameRegex.search(pattern)
console.log(sonuc2)
// <!-- regex YAZIM TARZI -->

//FORM VALIDATION


signUpForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = signUpForm.username.value;


    if (usernamePattern.test(username)) {
        errorMessage.textContent = 'Başarılı'
    } else {
        errorMessage.textContent = 'Lütfen 4 - 10 arasında karakter giriniz'
    }
})

signUpForm.username.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) { // burada e.target ile valuye ulasmak her zaman daha mantıklı cunku id veya name degısebılır

        signUpForm.username.setAttribute('class', 'success');

    } else {
        signUpForm.username.setAttribute('class', 'error')
    }
})

//FORM VALIDATION