let gun = 11;
let ay = 10;
let yil = 1999;

console.log("Rıdvan Güzel " + gun +"/"+ay+"/"+ yil + " tarihinde dünyaya gelmiştir.");

const arabafiyati = 50000;
console.log(arabafiyati);



// Birleştirme
 
let ad = "Rıdvan Mahmood";
let soyad = "Güzel";
let adSoyad  = ad + " " + soyad;
console.log(adSoyad);

//Karakterleri Çekme

console.log(adSoyad[2]);

//Kaç Karakter

console.log(adSoyad.length);

// Karakter varsa yazdır 
if(adSoyad.length > 0 ){
    console.log("Karakter Var");
}

//Methodlar

console.log(adSoyad.toUpperCase());
let kucukAdSoyad = adSoyad.toLowerCase();
console.log(kucukAdSoyad);
console.log(adSoyad);

let index = adSoyad.indexOf("ü");
console.log("ü : " + index);


//Method Kullanımları



let son = adSoyad.lastIndexOf("o");
console.log(son)

let bastanbasla = adSoyad.slice(0, 5);
console.log(bastanbasla);

let substrings = adSoyad.substring(5, 12);
console.log(substrings);

let mahmood = adSoyad.replace('M', 'K');
console.log(mahmood);


// Numbers

let normalsayi = 15;
let pisayisi = 3.14;

let yaricap = pisayisi * normalsayi**2;
console.log(yaricap);


let kalan = yaricap % 15;
console.log(kalan);
let sonuc = 6 * (yaricap/2)**2;
console.log(sonuc);
let bolme = yaricap / normalsayi;
console.log(bolme);
bolme = bolme + 1;

bolme +=1
bolme++;
bolme *= 3;
console.log(bolme);



// Template Strings

const framework1 = 'Javascript';
const framework2 = 'Vue';
const framework3  = 'React';

let result = `Frontend eğitimleri : ${framework1} ${framework2} ${framework3}`;
console.log(result);

let htmlTema = 
`<h1>${framework1}</h1>
<h2>${framework2}</h2>
<h3>${framework3}</h3>`
console.log(htmlTema);

//Arrays

let isimler = ['can', 'rıdvan', 'tugce'];
console.log(isimler[1]);

let rastgele = ['can', 'rıdvan', 10, 'ebrar', 12];
console.log(rastgele);

let tireli = isimler.join('-');
console.log(tireli);


let virgullu = isimler.join(',');
console.log(virgullu);

let eklemeli = isimler.concat(['rabia', 'burak']);
    console.log(eklemeli);


    let pushModel = isimler.push('deniz');
    console.log(isimler);

isimler.pop();
console.log(isimler);