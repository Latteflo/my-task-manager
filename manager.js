// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require("fs")
const readline = require("readline")
var rl = readline.createInterface(process.stdin, process.stdout)

/////////we define the bucket in which the tasks will go//////////
let tasks = []

////////we connect it with the task.json file created just for having the tasks saved in memory/////////
try {
  const data = fs.readFileSync("tasks.json", "utf8")
  tasks = JSON.parse(data)
} catch (error) {
  console.log("No existing tasks found.")
}

////////////function to save tasks/////////////////
const saveTasks = () => {
  fs.writeFileSync("tasks.json", JSON.stringify(tasks))
}

//////////////function to show out tasks////////////////////
const showTasks = () => {
  tasks.forEach((task, index) => {
    console.log(`${index}. ${task.name} - ${task.done ? "Done" : "Not Done"}`)
  })
}

///////////////function to add another task to our objects//////////////////////
const addTask = (task) => {
  tasks.push({ name: task, done: false })
  saveTasks()
}

////////////////function to delete the task from our objects//////////////////////////////////
const deleteTask = (taskIndex) => {
  tasks.splice(taskIndex, 1)
  saveTasks()
}
//////////////////function to mark the task as done ////////////////////////////////////
const markDone = (taskIndex) => {
  tasks[taskIndex].done = true
  saveTasks()
}
////////////////////function that allows us to come back at the menu of choices/////////////////////////////////////
const printMenu = () => {
  console.log(
    "Press: \n1. to see all your tasks;\n2. to add a task;\n3. to delete a task;\n4. to mark a task as done;\n5. to Exit the task manager"
  )
}

/////////////////Solution with switchcase////////////////////////////

const promptUser = () => {
  rl.question("Pick a number: ", (number) => {
    switch (number) {
      case "1":
        console.log("Your tasks are:")
        showTasks() ///calls the tasks
        printMenu() // prints the menu
        promptUser() /// ask the user for input
        break
      case "2":
        rl.question("Enter a task to add: ", (task) => {
          addTask(task) // asks the function addTask to add the task given by the user
          console.log("Your tasks after adding are:") // it shows what are the tasks in that moment in time with the addition
          showTasks() //calls the tasks
          printMenu() // prints the menu
          promptUser() // asks the user for input
        })
        break
      case "3":
        rl.question("Enter the index of the task to delete: ", (index) => {
          deleteTask(index) /// ask the function deleteTask to delete a task given by the user
          console.log("Your tasks after deletion are:") /// we print the tasks remaining after the deletion
          showTasks() // calls the tasks
          printMenu() // prints the menu
          promptUser() // asks for input
        })
        break
      case "4":
        rl.question(
          "Enter the index of the task to mark as done: ",
          (index) => {
            markDone(index) // the user inputs the task that needs marked as done
            console.log("Your tasks after marking are:") // this will be read and printed with the modifications
            showTasks() // call the tasks
            printMenu() //prints the menu
            promptUser() // asks for input
          }
        )
        break
      case "5":
        console.log("Exiting task manager...") //exit terminal
        rl.close()
        break
      default:
        console.log("Invalid choice, please enter a number between 1 and 5.")// error handling when the user presses something else beside nr 1-5
        printMenu()
        promptUser()
        break
    }
  })
}

/////////////////Solution with if-else ////////////////////////

//const promptUser = () => {
//  rl.question("Pick a number", (number) => {
//    if (number === "1") {
//      console.log("Your tasks are:")
//      showTasks()
//      printMenu()
//      promptUser()
//    } else if (number === "2") {
//      rl.question("Enter a task to add: ", (task) => {
//        addTask(task)
//        console.log("Your tasks after adding are:")
//        showTasks()
//        printMenu()
//        promptUser()
//      })
//    } else if (number === "3") {
//      rl.question("Enter the index of the task to delete: ", (index) => {
//        deleteTask(index)
//        console.log("Your tasks after deletion are:")
//        showTasks()
//        printMenu()
//        promptUser()
//      })
//    } else if (number === "4") {
//      rl.question("Enter the index of the task to mark as done: ", (index) => {
//        markDone(index)
//        console.log("Your tasks after marking are:")
//        showTasks()
//        printMenu()
//        promptUser()
//      })
//    } else if (number === "5") {
//      console.log("Exiting task manager...")
//      rl.close()
//    } else {
//      console.log("Invalid choice, please enter a number between 1 and 5.")
//      printMenu()
//      promptUser()
//    }
//  })
//}

console.log("Welcome to your task manager")
printMenu()
promptUser()
