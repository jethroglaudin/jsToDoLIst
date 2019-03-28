var todos = ["item1", "item2", "item3"];

// It should have a function to display todos

function displayTodos(){
  console.log ('My todos:', todos);

}
// It should have a function to add todos.

function addTodo (todo){
  todos.push(todo);
  displayTodos();

}
addTodo("hello");

// It should a function to change todos.

function changeTodo (position, newValue){
  todos[position] = newValue;
  displayTodos();
}

changeTodo(0, 'changed')
changeTodo(0, 'changed again')

// It should have a function to delete todos.
function deleteTodo(position) {
  todos.splice(position,1)
  displayTodos()
}