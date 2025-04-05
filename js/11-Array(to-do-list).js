const todoList=[];
renderTodolist();

//function for Generating HTML
function renderTodolist(){
    let todoListHTML = [];

    for(let i=0; i<todoList.length; i++){
        //const todo = todoList[i];
        const html = `<div> ${i+1}. ${todoList[i]}</div>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    console.log(name);
    if(name != ''){
        todoList.push(name);
        console.log(todoList);
        inputElement.value = '';
        renderTodolist();
    }
    else{
        alert('Enter something ...');
    }
}

//Button event
document.getElementById('myInput').addEventListener('keydown',function(event){
    //check if Enter was pressed
    if(event.keyCode == 13){
        event.preventDefault();

        //trigger the button click
        document.getElementById('myButton').click();
    }
});