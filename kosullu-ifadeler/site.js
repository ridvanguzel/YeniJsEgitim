// FOR KULLANIMI
// for(i = 0; i<10; i++){
//     console.log(i);
// }
// console.log("Döngü bitti...")


// const adSoyad = ['Tugce', 'Can', 'Rıdvan'];
// for(i=0; i<adSoyad.length; i++)
// {
//     // console.log(adSoyad[i]);
//     let html = `<div>${adSoyad[i]}</div>`;
//     console.log(html);
// }
// FOR KULLANIMI
// WHILE KULLANIMI
// const justName = ['Tekir', 'Tane', 'Yagmur'];
// let i=0;
// while(i<15){
//     console.log(i);
//     i++;
// }


// while(i<justName.length){
//     console.log(justName[i])
//     i++;
// }
// WHILE KULLANIMI

// DO WHILE KULLANIMI
// let i = 2;
// do{
//     console.log(i);
//     i++;
// }while(i<5);
// DO WHILE KULLANIMI


// IF ELSE KULLANIMI
// let numBe = 20
// if(numBe > 18){
//     console.log("Bu sayı 20 den kucuk")
// }

// const password = "Merhabaaaaaaaa!aa";

// if(password.length >= 16 && password.includes('!')){
//     console.log("Şifreniz baya güçlü karakterlere sahip " +  password.length);

// }else if (password.length >= 8){
//     console.log("Şifreniz biraz karakterli karakterlere sahiptir " +  password.length);
// }
// else{
//     console.log("Şifreniz tam karaktersizdir :) " + password.length);
// }


// const control = false;
// if(!control){
//     console.log('control başarılı');
// }

// IF ELSE KULLANIMI

// BREAK - CONTINUE KULLANIMI


// const sayilar  = [15,34,54,534,24,12,13,45,76,54];
// for(i = 0;i<sayilar.length; i++){

// if(sayilar[i] === 534){
//     continue;
// } // bunu basmadan yazmaya devam etti. taki break a kadar

// console.log(sayilar[i]);

//     if(sayilar[i]  === 13){
//         console.log(sayilar[i] + " Kötü kardeş kötü");
//         break;
//     }



// }

// BREAK - CONTINUE KULLANIMI

// SWITCH - CASE 
const dersNotu = 'DD';

switch (dersNotu) {
    case 'AA':
        console.log('Aferin Broooo');
        break;
    case 'BA':
        console.log('Güzel Başarı');
        break;
    case 'BB':
        console.log('Helal');
        break;
    case 'CB':
        console.log('Böyle devam');
        break;
    case 'CC':
        console.log('salmaya başladın');
        break;
    case 'DC':
        console.log('gttikçe salıyorsun');
        break;
    case 'DD':
        console.log('bak kalacaksın');
        break;
    default:
        console.log("kaldın");
        break;
}

// SWITCH - CASE 