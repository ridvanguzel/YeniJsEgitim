const answerForYes = ['E', 'E', 'E', 'E'];
const anketForm = document.querySelector('.anket-form');
const result = document.querySelector('.result');

anketForm.addEventListener('submit', e=>{
    e.preventDefault();

    let myScore = 0;
    const userAnswers = [anketForm.q1.value, anketForm.q2.value, anketForm.q3.value, anketForm.q4.value];

    userAnswers.forEach((answers, index) => {
            if(answers === answerForYes[index]){
                myScore += 25;
            }
    })

   console.log(myScore)

   result.classList.remove('d-none');


    let puan  = 0;
    const scoreBastir = setInterval(()=>{
        result.querySelector('span').textContent = `${puan}%`;
        if(puan == myScore){
            clearInterval(scoreBastir);
        }else{
            puan++;
        }
    }, 20);


    // result.querySelector('span').textContent = `${myScore}%`;
})

// setTimeout(()=>{ // bir kez çalışır
//     console.log('Rıdvan')
// }, 2000)


// setInterval(()=>{ //birden çok kez çalışır
//     console.log('Rıdvan')
// },2000)


// setInterval(()=>{ //birden çok kez çalışır
//     console.log('Rıdvan')
// },2000)

// let i = 0;

// const bastirVeri = setInterval(() =>{
//     console.log('Rıdvan');
//     i++;
//     if(i == 4){
//         clearInterval(bastirVeri);
//     }
// }, 1000)