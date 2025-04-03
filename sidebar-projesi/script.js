const openIcon = document.querySelector('.openIcon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.closeIcon');

openIcon.addEventListener('click', () =>{
    sidebar.classList.toggle('showSideBar');
});
closeIcon.addEventListener('click', () =>{
    sidebar.classList.remove('.showSideBar');
})