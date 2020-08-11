// Selectors
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');
var filterOption = document.querySelector('.filter-todo');

// Event Listeners
todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);

filterOption.addEventListener('click', filterTodo);

// Functions

function addTodo(event) {
  // prevent form from submiting
  event.preventDefault();
  // todo DIV
  var todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create LI
  var newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // add todo to local storage
  saveLocalTodos(todoInput.value);
  // check mark button
  var completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('completed-btn');
  todoDiv.appendChild(completedButton);
  // check trash button
  var trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  // append to list
  todoList.appendChild(todoDiv);
  // clear todo Input Value

  todoInput.value = '';
}

// trash 
function deleteCheck(e) {
  var item = e.target;
  // delete todo
  if (item.classList[0] === 'trash-btn') {
    var todo = item.parentElement;
    // animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function() {
      todo.remove();
    });    
  }
  // check mark
  if (item.classList[0] === 'completed-btn') {
    var todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

// filter
function filterTodo(e) {
  var todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}


// save local todos

function saveLocalTodos(todo) {
  // check if there is already a todo list
  var todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
  var todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo) {
    
  })
}
