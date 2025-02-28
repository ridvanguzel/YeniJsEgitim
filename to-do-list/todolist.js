const addFormList = document.querySelector('.add');
const listItem = document.querySelector('.todos');
const search = document.querySelector('.search input');

//ekleme işlemi
const generateToDoList = todo =>{
const html = `

          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
          </li>
`;
listItem.innerHTML += html;
}

addFormList.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addFormList.add.value.trim();
    // console.log(todo);

    if(todo.length){
        generateToDoList(todo);
        addFormList.reset();
    }
})
//Silme işlemi
listItem.addEventListener('click', e =>{
    e.preventDefault();

if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}

})


//Arama işlemi

const filterTodos = term =>{
    Array.from(listItem.children)
    .filter(s => !s.textContent.toLowerCase().includes(term))
    .forEach(s => s.classList.add('filtered'));

    Array.from(listItem.children)
    .filter(s => s.textContent.toLowerCase().includes(term))
    .forEach(s => s.classList.remove('filtered'));
}


search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    // console.log(term);
    filterTodos(term);
})