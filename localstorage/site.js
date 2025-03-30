//LOCAL STORAGE SET GET UPDATE İŞLEMLERİ 
localStorage.setItem('name', 'Rıdvan'); // ilk deger attribute, ikinci deger value degeri. önce set ederiz, daha sonra get ile çagırırız, sonra console bastırırız. 
localStorage.setItem('age', 25);

let name = localStorage.getItem('name'); // attribute degerini getirdik.
let age  = localStorage.getItem('age');
console.log(name, age);


localStorage.setItem('name', 'Rıdvan Güzel Fe');
localStorage.setItem('age', 26);

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);

//LOCAL STORAGE SİLME İŞLEMLERİ 

// BİR TANESINI SILMEK ISTEDIGIMIZDE

localStorage.removeItem('name');
name = localStorage.getItem('name');
console.log(name);


// BİRDEN FAZLASINI SILMEK ISTEDIGIMIZDE

localStorage.clear();
name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);

// Localstoragea string tipindeki verileri set edebılırız.

// Bu tarz arrayleri önce stringde çevirecegiz. json.stringify iel daha sonra json.parse ile array yapabılırız. öce set edecegiz, sonra get item ile çagırıp konsola basacagız.
const variable = [
    {hobby : "play basketball",  name: "Rıdvan"},
    {hobby : "play football", name : "Mehmet"},
    {hobby : "Drink Tea", name : "Ali"},
];

console.log(JSON.stringify(variable)) // önce konsolda görmek için arrayı string veriye çevirdim.
// daha sonra string olarak set ediyorum
localStorage.setItem('todos', JSON.stringify(variable));
//daha sonra get attribute degerını alıyorum 
const storedData = localStorage.getItem('todos');
//daha sonra console da  göstermek için array olarak aldım. ( localstorage da tutuyorum veriyi)
console.log(JSON.parse(storedData));