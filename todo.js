//find stuff

const Todoli = document.querySelector(".todo-list");
const TodoInput = document.querySelector(".todo-input");
const TodoButton = document.querySelector(".todo-button");
const TodoContainer = document.querySelector(".todo-container");
const FilterOption = document.querySelector(".filter-todo")


//Eventlisteners

TodoButton.addEventListener("click", addTodo);
Todoli.addEventListener("click", deleteTodo);
FilterOption.addEventListener("change", filterTodo);

//Functions

function addTodo(event) {
    //event.PreventDefault(), Seite wird nicht neu geladen
    event.preventDefault();
    //Todo Div(Holds List)
    const TodoDiv = document.createElement("div");
    TodoDiv.classList.add("todo");
    //Creating List
    const ToDoList = document.createElement("li");
    ToDoList.innerText = TodoInput.value;
    ToDoList.classList.add("todo-item");
    TodoDiv.appendChild(ToDoList);
    //Creating Checkmark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    TodoDiv.appendChild(completedButton);
    //Creating Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add("delete-btn");
    TodoDiv.appendChild(deleteButton);
    //Append List
    Todoli.appendChild(TodoDiv);
    //Clear Input after adding Todo
    TodoInput.value = "";
}


function deleteTodo(e) {
    const item = e.target;
    //Delete Todo
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        //run Animation        
        todo.classList.add("fall");
        //if Animation Ends run this code
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}



function filterTodo(e) {
    const todos = Todoli.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}


