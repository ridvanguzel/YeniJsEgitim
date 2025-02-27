//FIND METODU
//handikap : içerindeki koşul true oldugudna ilk degerı getırır digerlerıne bıle bakamz. extra fılter metodu kullanılabılır
const pointsFind = [70,45,67,34,32,45, 45,32,47,56,85,32,100,92];


const pointsFindMetod = pointsFind.find(f =>{
    // if(f > 70){
    //     return pointsFind;
    // }
   return f > 70;

})

console.log(pointsFindMetod);