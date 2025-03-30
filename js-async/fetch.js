// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((response) => response.json()) // promise donduruyor
// .then((json) => console.log(json));


fetch('examples/ridvasn.json') // belirtilen urlden verı almak için istek gönderdım . fetch fonksiyonu bir promise donduruyor // bu kısım promise onduruyor, sonrasında then ıle datayı basmamız lazım
.then((response) => { //response parametresı sucunudan gelen yanıtı temsıl eder  // bu kısım istek basarılı olunca calısır.
    return response.json(); // bu metod yanıtı json formatında ayırıstırır.
})
.then((data)=> { // bu then json ayrıstırması basarılı olunca calısır.
    console.log(data); // data ayrıstırılmıs json verısını ıcerıyor.
})
.catch((err) => { // herhangi bir hata cıkarsa ayrıstırmad yatda etch ıslemınde o yuzden yazdık 
    console.log('Hata aldık', err);
});


// fetch('examples/ridvan.json') // belirtilen urlden verı almak için istek gönderdım . fetch fonksiyonu bir promise donduruyor // bu kısım promise onduruyor, sonrasında then ıle datayı basmamız lazım
// .then((response) => { //response parametresı sucunudan gelen yanıtı temsıl eder  // bu kısım istek basarılı olunca calısır.
//     return response.json(); // bu metod yanıtı json formatında ayırıstırır.
// })
// .then((data1)=> { // bu then json ayrıstırması basarılı olunca calısır.
//     console.log(data1); // data ayrıstırılmıs json verısını ıcerıyor.
//     return fetch('examples/mehmet.json'); // ıkıncı bir ıstek atacagımızda kullanırız
// })
// .then((response)=>{
//     return response.json();
// }).then((data2)=>{
//     console.log(data2);
// })
// .catch((err) => { // herhangi bir hata cıkarsa ayrıstırmad yatda etch ıslemınde o yuzden yazdık 
//     console.log('Hata aldık', err);
// });

// ASYNC / AWAİT 

// ASYNC BİR FONKSİYON HER ZMANA GERIYE PROMISE DONDURUR



const getTodos = async () =>{ // async anahtar kelımesı bu fonksiyonun promise odndurecegını ve içinde await kullanılbleceğini belirtir
    let response = await fetch('examples/ridvan.json'); // await ile fetch ıslemının tamamlanması beklenıyor ve işlem sonucu response degiskenıne atanıyor
    if(response.status !== 200){
        throw new Error('Dogru endpointte istek atılmadı');
    }
    const data = await response.json(); // ile alınan yanoıt json formatından js nesnesıne donustuuluyor. bu nesne return data tarafından donduruluyor
    return data; 
}

getTodos() // fopnksiyonu cagırdık chain promise ler ile(metodlar ile) işleniyor
.then((response)=>{
    console.log(response);
})
.catch((err) =>{
    console.log(err.message);
});