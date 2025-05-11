let todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
  }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }]

renderTodoList();

function renderTodoList() {
    let todoHTML = '';

    todoList.forEach((todoObject , index) => {
        const {name,dueDate} = todoObject
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button">delete</button>`;
            todoHTML += html;
    });

    document.querySelector('.display-todo-list').innerHTML = todoHTML;

    document.querySelector('.delete-todo-button')
    .forEach((deleteBUtton,index) => {
        deleteBUtton.addEventListener('click',() => {
            todoList.splice(index , 1);
            renderTodoList();
        });
    });
}

document.querySelector('.add-todo-button')
.addEventListener('click', () => {
    addTodo();
});

function addTodo() {
    const inputElement = document.querySelector('.input-todo-name');
    const name = inputElement.value ;

    const dateinputElement = document.querySelector('.input-todo-date');
    const dueDate = dateinputElement.value ;

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}