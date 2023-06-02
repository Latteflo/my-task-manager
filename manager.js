// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require("fs")
const readline = require("readline")
var rl = readline.createInterface(process.stdin, process.stdout)


let tasks = [];
try {
    const data = fs.readFileSync('tasks.json', 'utf8');
    tasks = JSON.parse(data);
} catch (error) {
    console.log("No existing tasks found.");
}

const saveTasks = () => {
    fs.writeFileSync('tasks.json', JSON.stringify(tasks));
};

const showTasks = () => {
    console.log(tasks);
};

const addTask = (task) => {
    tasks.push(task);
    saveTasks();
};

const deleteTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    saveTasks();
};

const printMenu = () => {
    console.log(
        "Press: \n1. to see all your tasks;\n2. to add a task;\n3. to delete a task;\n4. to Exit the task manager"
    );
};


/////////////////Solution with switchcase////////////////////////////

const promptUser = () => {
    rl.question("Pick a number: ", (number) => {
        switch (number) {
            case "1":
                console.log("Your tasks are:");
                showTasks();
                printMenu();
                promptUser();
                break;
            case "2":
                rl.question("Enter a task to add: ", (task) => {
                    addTask(task);
                    console.log("Your tasks after adding are:");
                    showTasks();
                    printMenu();
                    promptUser();
                });
                break;
            case "3":
                rl.question("Enter the index of the task to delete: ", (index) => {
                    deleteTask(index);
                    console.log("Your tasks after deletion are:");
                    showTasks();
                    printMenu();
                    promptUser();
                });
                break;
            case "4":
                console.log("Exiting task manager...");
                rl.close();
                break;
            default:
                console.log("Invalid choice, please enter a number between 1 and 4.");
                printMenu();
                promptUser();
                break;
        }
    });
};

console.log("Welcome to your task manager");
printMenu();
promptUser();

/////////////////Solution with if-else ////////////////////////

//rl.question("Pick a number", (number) => {
//    if (number === "1") {
//        console.log("Your tasks are:");
//        showTasks();
//        printMenu();
//        promptUser();
//    }
//     else if (number === "2"){
//        rl.question("Enter a task to add: ", (task) => {
//            addTask(task);
//            console.log("Your tasks after adding are:");
//            showTasks();
//            printMenu();
//            promptUser();
//        })
//     }
//    else if (number === "3"){
//        rl.question("Enter the index of the task to delete: ", (index) => {
//            deleteTask(index);
//            console.log("Your tasks after deletion are:");
//            showTasks();
//            printMenu();
//            promptUser();
//        })
//    }
//     else if (number === "4"){
//        console.log("Exiting task manager...")
//        rl.close()
//     }
//      else {
//        console.log("Invalid choice, please enter a number between 1 and 4.")
//        printMenu();
//        promptUser();
//    }
//  })
  

