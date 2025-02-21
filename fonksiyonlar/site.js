//Fonksiyon Tanımlama Ders 1
function fonkTanimlama()
{
    console.log("Rıdvan")
}
fonkTanimlama();


const sabitFonksiyon = function(){
    console.log('Sabit Fonksiyon Tanimlariz');
}
sabitFonksiyon();


//Fonksiyon Tanımlama Ders 1

//Fonksiyona Parametre Verme

const parametreGonderme = function(ad,soyad){
    console.log(`Ad : ${ad} Soyad : ${soyad}`);
}
parametreGonderme('Rıdvan', 'Güzel');

const parametreGondermeIki = function(ad,soyad){
    console.log('Ad Soyad : ' + ad + ' ' + soyad)
}
parametreGondermeIki('Rıdvan', 'Güzel');

const parametreGondermeUc = function(ad = 'Rıdvan', soyad = 'Güzel'){
    console.log('Ad Soyad : ' + ad + ' ' + soyad);
}
parametreGondermeUc();
//Fonksiyona Parametre Verme

//Fonksiyonlarda Return


const kareAlani = function(kenar){
    let alan = kenar**2;
    console.log(alan);

}
kareAlani(16);

const kareAlaniIki = function(kenar){
    let alan = kenar**2;
    return alan;//return alan; satırında, hesaplanan alan değeri dışarıya döndürülüyor. Fonksiyonlar return ile dış dünyaya bir sonuç verirler. Bu örnekte return alan;, fonksiyonun sonucu olarak alan değişkenindeki değeri (kenarın karesi) geri döndürüyor.
}
const sonuc = kareAlaniIki(6);
console.log(sonuc);
//Fonksiyonlarda Return

// Arrow Function Nedir? Nasıl Tanımlanır ve Kullanılır?
const kareAlaniArrowBir = kenar => kenar**2; //Eğer sadece bir parametre varsa(kenar parametresi) parantez koymamıza gerekyok. ve bir return satırı varsa return ifadesi ve süszlü parantezleri kaldırırız
const sonucArrowBir = kareAlaniArrowBir(12);
console.log(sonucArrowBir)

const nameArrowIki = () => 'Can'; //Hiç parametre yoksa parantez koymak zorundayız.  Bir return satırı varsa return ifadesi ve süszlü parantezleri kaldırırız
const sonucArrowIki = nameArrowIki();
console.log(sonucArrowIki);


const fatura = (urunler,vergi) =>{
    let toplam = 0;
    for(let i = 0; i < urunler.length; i++){
        toplam += urunler[i] + urunler[i] * vergi;
    }
    return toplam;

}
console.log(fatura([10,20,30], 0.25));

// Arrow Function Nedir? Nasıl Tanımlanır ve Kullanılır?

//Fonksiyon ve Method Arasındaki Fark Nedir?
const methodFunc = () => 'Can'
const sonuc2 = methodFunc();
console.log(sonuc2);

const sonucBu = 'Name';
let sonuc3 = sonucBu.toUpperCase();
console.log(sonuc3);
//Fonksiyon ve Method Arasındaki Fark Nedir?

//Foreach Kullanımı


let ogrencilerim = ['mehmet', 'ahmet', 'derya', 'ahsen'];

ogrencilerim.forEach(function()
{
    console.log('Selam');
})

ogrencilerim.forEach(function(kisi){
    console.log(kisi);
})

const sonucOgrencilerim = (person,index) =>{
    console.log(`Sıra Numarası : ${index} ${person}`)
}


ogrencilerim.forEach(sonucOgrencilerim);

//FOREACH UL ÖRNEĞİ

const ulListesi = document.querySelector('.main');
let ogrenciListem = ['mehmet', 'ahmet', 'derya', 'ahsen'];
let html = ``;
ogrenciListem.forEach(ogrenci=>{
    html += `<li>${ogrenci}</li>`
})
console.log(html);
ulListesi.innerHTML = html;

//FOREACH UL ÖRNEĞİ

//Foreach Kullanımı
