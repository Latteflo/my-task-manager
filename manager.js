// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require("fs")
const readline = require("readline")
var rl = readline.createInterface(process.stdin, process.stdout)

let tasks = ["Buy milk", "Shower", "Practice JS", "Take over the world!"];

const showTasks = () => {
  console.log(tasks)
}

const addTask = (task) => {
  tasks.push(task)
}

const deleteTask = (taskIndex) => {
  tasks.splice(taskIndex, 1)
}

console.log(
  "Welcome to your task manager, Press: \n1. to see all your tasks;\n2. to add a task;\n3. to delete a task;\n4. to Exit the task manager"
)


rl.question("Pick a number", (number) => {
  switch (number) {
    case "1":
      console.log("Your tasks are:")
      showTasks()
      break
    case "2":
      rl.question("Enter a task to add: ", (task) => {
        addTask(task)
        console.log("Your tasks after adding are:")
        showTasks()
        rl.close()
      })
      break
    case "3":
      rl.question("Enter the index of the task to delete: ", (index) => {
        deleteTask(index)
        console.log("Your tasks after deletion are:")
        showTasks()
        rl.close()
      })
      break
  }
})
