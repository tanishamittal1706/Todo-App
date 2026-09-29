let todoList = [
    {items: 'Go to College', dueDate: '4/10/26', completed: false},
    {items : 'Complete Assigment' ,dueDate: '4/10/26',completed:true}
];
displayItems();


function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    if(todoItem.trim() === ''){
        alert('Please enter a todo!');
        return;
    }

    todoList.push({items: todoItem,dueDate: todoDate, completed: false});

    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function deleteTodo(index){
    todoList.splice(index,1);
    displayItems();
}

function toggleComplete(index){
    todoList[index].completed = !todoList[index].completed;
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for(let i = 0; i < todoList.length; i++){
        let items = todoList[i].items;
        let dueDate = todoList[i].dueDate;
        let isDone = todoList[i].completed;

        newHtml += ` 
           <div class = "todo-row ${isDone ? 'completed' : ''}">
                <span class ="todo-item-text" onclick="toggleComplete(${i})">
                    <span class ="material-symbols-outlined check-box-icon">
                       ${isDone ? 'check_box' : 'check_box_outline_blank'} 
                    </span> 
                    <span class ="text-content">${items}</span>
                </span>
                <span class ="todo-item-date">
                    ${dueDate ? `<span class="material-symbols-outlined date-icon">calendar_today</span> ${dueDate}` : ''}
                </span>
                <button class ="delete-btn" onclick="deleteTodo(${i})">
                    <span class="material-symbols-outlined">delete</span>Delete
                </button>   
            </div>  
            `;
        
    }
    containerElement.innerHTML = newHtml;        
}