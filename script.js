// Local Storage
const nametxt = document.getElementById('name');
const namediv = document.querySelector('.name');
const tasksect = document.querySelector('.add-task');


// Functions

const addName = () =>{
    const confirmBtn = document.getElementById('confirm');
    confirmBtn.addEventListener('click', ()=>{

        const nameInput = document.getElementById('nameinput');
      
        let newname = nameInput.value;
        if ( nameInput.placeholder != 'Your Name Is Too Short'){
        
            if(newname.length > 2) {
                var letters = /^[A-Za-z]+$/;
                if(newname.match(letters)){
                    nametxt.textContent = newname; 
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

// Check Localstorage Name

if (localStorage.getItem('name')) {
    nametxt.textContent = localStorage.getItem('name');
    namediv.style.display = 'none';
    tasksect.style.display = 'flex';

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
const tasks = document.querySelector('.tasks');

document.getElementById('add-btn').addEventListener('click',() =>{
        const taskName = document.getElementById('task-name');
        if(taskName.value != ''){
            const tasks = document.querySelector('.tasks');
            const newTaskLi = document.createElement('li');
            const newTaskSpan = document.createElement('span');
            const newTaskDiv = document.createElement('div');
            const newTaskIC = document.createElement('i');
            const newTaskIT = document.createElement('i');
            newTaskIC.classList.add('fas');
            newTaskIC.classList.add('fa-check-circle');
            newTaskIT.classList.add('fas');
            newTaskIT.classList.add('fa-trash-alt');
            newTaskSpan.innerText = taskName.value;
            newTaskDiv.appendChild(newTaskIT);
            newTaskDiv.classList.add('click');
            newTaskLi.appendChild(newTaskIC);
            newTaskLi.appendChild(newTaskSpan);
            newTaskLi.appendChild(newTaskDiv);
            newTaskLi.classList.add('task');
            tasks.appendChild(newTaskLi);
            taskName.value = '';
            taskName.placeholder = 'Add More ';
        }
        
    });



// Remove Task
tasks.addEventListener('mouseover', redborder);
tasks.addEventListener('mouseout', whiteborder);
tasks.addEventListener('click', checkremove);

function checkremove(e){
if(e.target.classList[1] ==='fa-trash-alt'){
    e.target.parentElement.parentElement.remove();
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