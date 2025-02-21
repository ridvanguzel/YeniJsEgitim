//map metodu sık kullanılır, her elemanı tek basına update edebılır


const pointsMap = [70,45,67,34,32,45, 45,32,47,56,85,32,100,92];

const newPoints = pointsMap.map(r =>{
    return r + 10;
})
console.log(newPoints);


const studentMapName = [
    {name : 'Rıdvan', pointMap: 50},
    {name : 'Ahmet', pointMap: 45},
    {name : 'Elif', pointMap: 56},
    {name : 'Ayşe', pointMap: 45},
    {name : 'Mehmet', pointMap: 45},
    {name : 'Taha', pointMap: 76},
    {name : 'İrem', pointMap: 65},
]


const studentPointMapNew = studentMapName.map(p =>{
    if(p.pointMap < 50){
        // return {name : p.name, pointMap : p.pointMap + 15} sadece guncelledıgmızı property yi yazmak daha mantıklı
        p.pointMap += 15; // sadece güncelledımıgız propertyi yazdık
        return p;
    }else{
        return p;
    }
})
console.log(studentPointMapNew);