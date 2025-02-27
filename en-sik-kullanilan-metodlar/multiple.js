const studentMultiple = [
    {studentName : 'Rıdvan', pointMultiple: 50},
    {studentName : 'Ahmet', pointMultiple: 45},
    {studentName : 'Elif', pointMultiple: 56},
    {studentName : 'Ayşe', pointMultiple: 45},
    {studentName : 'Mehmet', pointMultiple: 45},
    {studentName : 'Taha', pointMultiple: 76},
    {studentName : 'İrem', pointMultiple: 65},
]

// çok satır kullanarak yazma biçimi
// const filtered = studentMultiple.filter(student => student.pointMultiple < 50); 

// const plusPoint = filtered.map(student =>{
//     return `${student.studentName} adlı öğrencinin yeni notu : ${student.pointMultiple + 15}`;
// });
// console.log(plusPoint);

// tek satır kullanarak yazma biçimi


const newNotes = studentMultiple.filter(student => student.pointMultiple < 50).map(
    student => ` ${student.studentName} adlı öğrencimizin yeni puanı ${student.pointMultiple + 30}`
)
console.log(newNotes);