//Filter Metodu 

// ana dizyi değiştirmiyorsa yenı degişkene atayabılırız  filter metodu, belirli bir koşulu sağlayan elemanları seçip yeni bir dizi oluşturur.

//Örnek 1
const points = [70,45,67,34,32,45, 45,32,47,56,85,32,100,92];// yeni dizi olusturur

const studentPoints = points.filter(point =>{
    return point > 65;

})
console.log(studentPoints);

//Örnek 3 Kısa return yazımı
const pointsShort = [70,45,67,34,32,45, 45,32,47,56,85,32,100,92];// yeni dizi olusturur

const studentPointsShort = points.filter(point => point > 75)
console.log(studentPoints);

//Örnek 2
const students = [
    {name : 'Rıdvan', passed: true},
    {name : 'Ahmet', passed: false},
    {name : 'Elif', passed: false},
    {name : 'Ayşe', passed: true},
    {name : 'Mehmet', passed: false},
    {name : 'Taha', passed: false},
    {name : 'İrem', passed: true},
]
const passedStudents = students.filter(student =>{
    return !student.passed;
})
console.log(passedStudents);