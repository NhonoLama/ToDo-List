const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemp = (newTask) => {
    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
     <span>${newTask}</span>
     <i class="fa-solid fa-trash delete"></i>
     </li> `
    
    list.innerHTML += html; 
    
}

const filteredTask = (term) =>{
    Array.from(list.children)
     .filter(task => !task.textContent.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
     .forEach(task => task.classList.add('avoid'));   
     
    Array.from(list.children)
     .filter(task => task.textContent.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
     .forEach(task => task.classList.remove('avoid')); 
    }

addForm.addEventListener('submit' , e => {
    e.preventDefault();

    const newTask = addForm.add.value.trim(); //trim is used to clear spaces before the inital letter.

    if(newTask.length){
        generateTemp(newTask);
        addForm.reset();  //clears the letters in the input field.
    }
    
})

//deleteing a task

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){           // checks if clicked element is trash can
        e.target.parentElement.remove();                 // removes the parent element i.e. the li tag
    }
})

//searching for a task 

search.addEventListener('keyup' , ()=>{
    const term = search.value.trim();
    filteredTask(term);
    
})