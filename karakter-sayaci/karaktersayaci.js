const textarea = document.querySelector('#karakterTextArea');
const totalCounter = document.querySelector('#totalCounter');
const remainingCounter = document.querySelector('#remainingCounter')

textarea.addEventListener('keyup', updateCounter);
function updateCounter(){
    totalCounter.textContent = textarea.value.length;
    remainingCounter.textContent = (textarea.getAttribute('MaxLength') - textarea.value.length);
    if(remainingCounter.textContent == 0){
        setTimeout(() => {
            alert('Karakter sayısı bitti agam');
        }, 2000);
    }
}