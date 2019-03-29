var jethro = {
  name: 'Jethro',
  sayName: function(){ // Anonomous function since it does not have a name
    console.log(this);
  }

}

////////////////////////////////////////


// It should store the todos array on an object
var todoList = {
todos:['item1', 'item2', 'item3'],
//It should have a displayTodos method
displayTodos: function(){
  console.log('My Todos', this.todos)
}, //It should have a changeTodo method
addTodo: function(todo){
  this.todos.push(todo);
  this.displayTodos();
},//It should have a deleteTodo method
deleteTodo: function (position){
  this.todos.splice(position,1);
  this.displayTodos();
}
};

function deleteTodo(position){
  this.todos.splice(position,1);
  this.displayTodos();
}