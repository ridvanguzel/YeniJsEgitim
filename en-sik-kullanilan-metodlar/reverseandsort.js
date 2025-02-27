const isimlerDegisken = ['mehmet', 'ali', 'ridvan', 'ayse', 'can', 'tuba', 'ali'];
isimlerDegisken.sort();
isimlerDegisken.reverse();
console.log(isimlerDegisken);


const puanDegiskenlerim = [43,34,4321,12,2,323,34,42,67,54,43,3232,231,12,233,4332,32,32,7,890,67,567,56,88,45,3,35,6,8];
puanDegiskenlerim.sort();
puanDegiskenlerim.reverse();


const studentSiralama = [
    {name:'Osman', age: 45},
    {name:'Tuba', age: 25},
    {name:'Rıdvan', age: 34},
    {name:'Elif', age: 65},
];


// studentSiralama.sort((a,b) =>{
//     if(a.age > b.age){
//         return -1;
//     }else if(b.age > a.age){
//         return 1;
//     }else{
//         return 0;
//     }
// })
// console.log(studentSiralama);

studentSiralama.sort((a,b) => b.age - a.age);
console.log(studentSiralama);


puanDegiskenlerim.sort((a,b) => a- b);
console.log(puanDegiskenlerim)