document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoInput = document.querySelector("input[type='text']")
  const form = document.querySelector("#create-task-form")
  const submitButton = document.querySelector("input[type='submit']")
  const todoList = document.querySelector("#tasks")
  
  
  const renderHTML = () => { 
    const todo = `<li>
                    ${todoInput.value} <button>x</button>
                  </li>
                  `
  }
  
  const addTodo = e => { 
    e.preventDefault()
    renderHTML()
    todoList.insertAdjacentHTML('afterbegin', todoInput.value)
  } 
  
  
  form.addEventListener('submit', e => e.preventDefault())
  submitButton.addEventListener('click', addTodo)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});
