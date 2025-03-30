//async code

// console.log(1);
// console.log(2);

// setTimeout(()=>{
//     console.log("Rıdvan Güzel")
// },2000)
// console.log(3);
// console.log(4);

// httprequest  // developer.mozilla status code

// const getTodos = (resource, callback) =>{

// const request = new XMLHttpRequest(); // sunucudan veri almak ya da sunucuya ver iieltmek için kullanılır
// request.addEventListener('readystatechange', () =>{
//     // console.log(request, request.readyState);
//     if(request.readyState === 4 && request.status === 200){
//         // console.log(request.responseText);
//         const data = JSON.parse(request.responseText); // datayı parçaladık
//         callback(undefined, data);
//     }else if(request.readyState === 4){
//         // console.log('Başarılı değil')
//         callback('Başarılı cevap alamadık', undefined);
//     }
// });

// request.open('GET', resource);
// request.send();

// };

// getTodos('examples/ridvan.json',(err, data) =>{
//     console.log(data);
//     getTodos('examples/mehmet.json',(err, data) =>{
//         console.log(data);
//     });
// });

// JavaScript'te Promise, asenkron işlemleri daha yönetilebilir hale getiren bir nesnedir. Bir işlemin tamamlanıp tamamlanmadığını ve sonucunu (başarıyla tamamlanıp tamamlanmadığını) takip etmek için kullanılır.

// Promise'in 3 Durumu Vardır
// Pending (Beklemede): İşlem hala devam ediyor.
// Fulfilled (Başarılı): İşlem başarıyla tamamlandı.
// Rejected (Hata): İşlem başarısız oldu.

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("Başarılı cevap alamadık");
//       }
//     });
//     request.open("GET", resource);
//     request.send();
//   });
// };
// getTodos("examples/ridvan.json")
//   .then((data) => {
//     console.log("Promise 1", data);
//     return getTodos("examples/mehmet.json");
//   })
//   .then((data) => {
//     console.log("Promise 2", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//CHAIN PROMISE
