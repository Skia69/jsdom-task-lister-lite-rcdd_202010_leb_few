document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoInput = document.querySelector("input[type='text']")
  const form = document.querySelector("#create-task-form")
  const submitButton = document.querySelector("input[type='submit']")
  const todoList = document.querySelector("#tasks")
  
  
  const addTodo = e => { 
    e.preventDefault()
    todoList.insertAdjacentHTML('afterbegin', todoInput.value)
  } 
  
  
  form.addEventListener('submit', e => e.preventDefault())
  submitButton.addEventListener('click', addTodo)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});
