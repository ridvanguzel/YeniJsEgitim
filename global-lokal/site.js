let yas = 29; //global değişken

if(true){
    // yas = 60; // tanımlama yapmıyoruz, yas'ı update ettik.
    let yas = 35; // local değiişken
    console.log("İçerideki Yaş : " + yas);
    if(true){
        let yas = 56;
        let dunya = "Nasılsın Çocuk";
        var merhaba = "Selamlıyorum seni Dünyaaa"
        console.log(yas, dunya, merhaba)
    }
}
console.log("Dışarıdaki Yaş : " + yas, merhaba);