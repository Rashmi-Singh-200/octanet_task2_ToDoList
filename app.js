let listcontainer=document.getElementById('List-container')
let inputbox=document.getElementById('input-box')

function addTask(){
    if(inputbox.value ===''){
        alert('Add task')
    }
    else{
        let task=document.createElement('li')
        task.textContent=inputbox.value
        listcontainer.appendChild(task)

        let span=document.createElement('span')
            span.textContent='\u00d7';
             task.appendChild(span)
        
    }
    inputbox.value=''
    saveData()
}

listcontainer.addEventListener('click', (el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName=='SPAN'){
        el.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("tasks",listcontainer.innerHTML)
}

function showData(){
    localStorage.innerHTML=localStorage.getItem('tasks')
}

showData()