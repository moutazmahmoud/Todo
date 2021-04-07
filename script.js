// Local Storage
const nametxt = document.getElementById('name');
const namediv = document.querySelector('.name');
const tasksect = document.querySelector('.add-task');
const tasks = document.querySelector('.tasks');


// Functions

const capitalize = (nam) => {
    return(nam.charAt(0).toUpperCase() + nam.slice(1));
    
}


const addName = () =>{
    const confirmBtn = document.getElementById('confirm');
    confirmBtn.addEventListener('click', ()=>{

        const nameInput = document.getElementById('nameinput');
      
        let newname = nameInput.value;
        if ( nameInput.placeholder != 'Your Name Is Too Short'){
        
            if(newname.length > 2) {
                var letters = /^[A-Za-z]+$/;
                if(newname.match(letters)){
                    nametxt.textContent = capitalize(newname) ; 
                    namediv.style.height = '0';
                    tasksect.style.display = 'flex';
                    localStorage.setItem('name',newname);
                }
                else{
                    nameInput.parentElement.reset();
                    nameInput.placeholder = 'Please Insert Letters Only !';
                };
                
            }else if(newname.length < 3 & newname.length > 0) {
                nameInput.parentElement.reset();
                nameInput.placeholder = 'Your Name Is Too Short';
            }else if(newname == ''){
                nameInput.classList.toggle('blink-1');
        
            }

        }else{
            nameInput.placeholder = "Please Enter Your Name";
        }
    
    
    });

};

const addTask = (newTask) =>{
    
        if(newTask != ''){
            const tasks = document.querySelector('.tasks');
            const taskInput = document.getElementById('task-name');
            const newTaskLi = document.createElement('li');
            const newTaskSpan = document.createElement('span');
            const newTaskdiv = document.createElement('div');
            const newTaskI = document.createElement('i');
            
            newTaskI.classList.add('fas');
            newTaskI.classList.add('fa-check-circle');
            newTaskdiv.innerHTML = '<i class="fas fa-trash-alt"></i>';
            newTaskdiv.classList.add('click');
            newTaskSpan.innerText = newTask;
            newTaskLi.appendChild(newTaskI);
            newTaskLi.appendChild(newTaskSpan);
            newTaskLi.appendChild(newTaskdiv);
            newTaskLi.classList.add('task');
            tasks.appendChild(newTaskLi);
            taskInput.value = '';
            
        }
        
   
};


// Check Localstorage Name

if (localStorage.getItem('name')) {
    nametxt.textContent = capitalize(localStorage.getItem('name')) ;
    namediv.style.display = 'none';
    tasksect.style.display = 'flex';
    if(localStorage.getItem('todos')){
         let todos = JSON.parse(localStorage.getItem('todos'));
         let i ;
         console.log(todos.length);
        for ( i = 0 ; i < todos.length; i++ ) {
            addTask(todos[i]);
        };
    }


} else {
    // add user name to app
    
    addName();   
};
    
// localStorage.clear();




// Form Prevent Defualt
document.querySelectorAll('form').forEach((form)=>{
    form.addEventListener('click', (e) => {
        e.preventDefault();
    })
})
// Add New task

document.getElementById('add-btn').addEventListener('click', ()=>{
    const task = document.getElementById('task-name').value;
    addTask(task);
    let todosu ;
    if(localStorage.getItem('todos')){

        todosu = JSON.parse(localStorage.getItem('todos'));

    }else{
        todosu = [];
    }
    todosu.push(task);
    localStorage.setItem( 'todos' , JSON.stringify(todosu));
});



// Remove Task
tasks.addEventListener('mouseover', redborder);
tasks.addEventListener('mouseout', whiteborder);
tasks.addEventListener('click', checkremove);

function checkremove(e){
if(e.target.classList[1] ==='fa-trash-alt'){
    e.target.parentElement.parentElement.remove();
    let todosu = JSON.parse(localStorage.getItem('todos'));
    todosu.splice(todosu.indexOf(e.target.parentElement.previousSibling.innerText),1);
    localStorage.setItem('todos', JSON.stringify(todosu));   
}else if (e.target.classList[1] ==='fa-check-circle'){
    e.target.classList.toggle('checked2');
    e.target.nextElementSibling.classList.toggle('checked') = ';'
}
};
function redborder(e){
if(e.target.classList[1] ==='fa-trash-alt'){
    e.target.parentElement.parentElement.style.borderColor = 'rgb(202, 45, 45)';
}
};
function whiteborder(e){
if(e.target.classList[1] ==='fa-trash-alt'){
    e.target.parentElement.parentElement.style.borderColor = '#fff';
}
};

// Adding current date
 
const d = new Date();
const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
month.innerHTML = months[d.getMonth()];
year.innerHTML = d.getUTCFullYear();

// add 0 before (1 number) day  

    if (d.getDate().toString().length == 1){

        day.innerHTML = '0' + d.getDate().toString(); 

    } else {
        day.innerHTML = d.getDate().toString();
    };
