//SAAT PROJESİ

const clock = document.querySelector('.clock');


const tick = () =>{
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const html = `<span>${hours}</span> : <span>${minutes}</span> : <span>${seconds}</span>`
    clock.innerHTML = html;
};

setInterval(tick, 1000);

//SAAT ÖRNEKLERİ

// const now = new Date();

// console.log(now);
// console.log(typeof now);

// console.log('Year : ', now.getFullYear());
// console.log('Month : ', now.getMonth() + 1);
// console.log('Date : ', now.getDate());
// console.log('Day : ', now.getDay());
// console.log('Hours : ', now.getHours());
// console.log('Minutes : ', now.getMinutes());
// console.log('Seconds : ', now.getSeconds());
// console.log('timestamp : ', now.getTime());
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());



// const startJobDay = new Date('01/06/2024');
// const nows = new Date();
// console.log(startJobDay);

// const diff = nows.getTime() - startJobDay.getTime();
// console.log(diff);


// const mins = Math.round(diff/1000/60);
// console.log(`İşe Başlama Dakika : ${mins}`);
// const hours = Math.round(mins/60);
// console.log(`İşe Başlama Saat : ${hours}`);
// const days = Math.round(hours/24);
// console.log(`İşe Başlama Gün ${days}`);
// const month = Math.round(days/30);
// console.log(`İşe Başlama Ay ${month}`);
// const year = Math.round(days/365);
// console.log(`İşe Başlama Yıl : ${year}`);



