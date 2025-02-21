//Ogrenciler obje tanımlama
let ogrenciler = {
    ad: 'Rıdvan',
    sinif:12,
    email:'ridvanguzel42@gmail.com',
    telefon:'050505050505050',
    yas:20,

}

console.log(ogrenciler.yas);
console.log(ogrenciler);
console.log(ogrenciler['telefon']);

ogrenciler.yas = 18;
console.log(ogrenciler.yas);
console.log(ogrenciler['yas']);
console.log(typeof ogrenciler);
//Ogrenciler obje tanımlama
//Objeye method ekleme
let ogrencilerim = {
    ad: 'Rıdvan',
    sinif:12,
    email:'ridvanguzel42@gmail.com',
    telefon:'050505050505050',
    yas:20,
    // aldigidersler:['matematik','kimya','biyoloji','dil bilgisi'],
    aldigidersler:[//Dizinin İçinde Obje Tanımlama
        {isim:'matematik', puan:'30'},
        {isim:'kimya', puan:'60'},
        {isim:'biyoloji', puan:'40'},
        {isim:'dil bilgisi', puan:'50'}
    ],
    login:function()
    {
        console.log('Öğrenci giriş yaptı');
    },
    logout()
    {
        console.log('Öğrenci çıkış yaptı');
    },
    printLessons(){//Objenin İçindeki Metodu Kullanarak Dersleri Console a Bastırma
        console.log(this.aldigidersler);
        this.aldigidersler.forEach(ders=>{
            console.log(ders.isim, ders.puan);//Dizinin İçinde Objedeki verileri çağırma
        })
    }
}

console.log(this)
console.log(this.aldigidersler);
ogrencilerim.printLessons();

// ogrencilerim.login();
// ogrencilerim.logout();

//Objeye method ekleme


//Objenin İçindeki Metodu Kullanarak Dersleri Console a Bastırma


//MATH OBJESI

let sayi = 5.4;
console.log(Math.PI)
console.log(Math.floor(sayi))
console.log(Math.trunc(sayi))
console.log(Math.ceil(sayi))
console.log(Math.round(sayi))

const rastgele = Math.random();
console.log(Math.round(rastgele*100))

//MATH OBJESI