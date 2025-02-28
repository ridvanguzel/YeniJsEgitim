//async code

// console.log(1);
// console.log(2);


// setTimeout(()=>{
//     console.log("Rıdvan Güzel")
// },2000)
// console.log(3);
// console.log(4);


// httprequest  // developer.mozilla status code

const request = new XMLHttpRequest(); // sunucudan veri almak ya da sunucuya ver iieltmek için kullanılır
request.addEventListener('readystatechange', () =>{
    console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 400){
        console.log(request.responseText);
    }else if(request.readyState === 4){
        console.log('Başarılı değil')
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss');
request.send();