document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoInput = document.querySelector("input[type='text']")
  const submitButton = document.querySelector("input[type='submit']")
  const todoList = document.querySelector("#tasks")
  
  let todos = []
  
  const addTodo = e => { 
    e.preventDefault()
    todos.push(todoInput.value)
  } 
  
  submitButton.addEventListener('click', addTodo)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});
