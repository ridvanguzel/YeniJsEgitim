//REDUCE 
// JavaScript’te reduce metodu, bir dizi içindeki öğeleri belirli bir işlemden geçirerek tek bir 
// değere indirgemek için kullanılır. Bu işlem, toplama, çarpma, birleştirme gibi birçok farklı amaç için kullanılabilir.
const pointsReduce = [70,45,67,34,32,45, 45,32,47,56,85,32,100,92];


const studentReduceName = [
    {name : 'Rıdvan', point: 50},
    {name : 'Ahmet', point: 45},
    {name : 'Elif', point: 56},
    {name : 'Ayşe', point: 45},
    {name : 'Mehmet', point: 45},
    {name : 'Taha', point: 76},
    {name : 'Mehmet', point: 65},
]


const mehmetTotal = studentReduceName.reduce((value,s)=>{
    if(s.name == "Mehmet"){
        value+=s.point;
    }

    return value;
}, 0)

console.log(mehmetTotal);


// reduce, studentReduceName dizisindeki her öğeyi tek tek dolaşıyor.
// Eğer kişinin ismi "Mehmet" ise, value değişkenine point değerini ekliyor.
// initialValue olarak 0 verildiği için value başlangıçta 0 oluyor.
// Sonuç olarak Mehmet isimli kişilerin point değerlerinin toplamı hesaplanıyor.