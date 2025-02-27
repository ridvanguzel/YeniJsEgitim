const pointlerim = [45,453,343,323,322,34];
const arrayIndex = pointlerim.findIndex(pointim => pointim == 343);
pointlerim[arrayIndex]=45;
console.log(pointlerim);


const studentlarim = [
    {name:'Osman', age: 45},
    {name:'Tuba', age: 25},
    {name:'Rıdvan', age: 34},
    {name:'Elif', age: 65},
];


const objectIndex = studentlarim.findIndex(s => s == 'Rıdvan');
studentlarim[objectIndex] = 'Mehmet Ağa';
console.log(studentlarim);