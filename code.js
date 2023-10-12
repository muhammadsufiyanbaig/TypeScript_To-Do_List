import inquirer from "inquirer";
let todos = [];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an operation",
            name: "select",
            choices: ["Add", "Update", "Pending", "Remove"]
        });
        if (ans.select == "Add") {
            let AddTodo = await inquirer.prompt({
                type: "input",
                message: "Add the New Task",
                name: "todo",
            });
            todos.push(AddTodo.todo);
            console.log(todos);
        }
        if (ans.select == "Update") {
            let UpdateTodo = await inquirer.prompt({
                type: "list",
                message: "Select the task for updating",
                name: "todos",
                choices: todos.map(task => task),
            });
            let AddTodo = await inquirer.prompt({
                type: "input",
                message: "Add the New Task",
                name: "todo",
            });
            let newTodos = todos.filter(val => val !== UpdateTodo.todo);
            todos = [...newTodos, AddTodo.todo];
            console.log("Task Updated");
            console.log(todos);
        }
        ;
        if (ans.select == "Pending") {
            console.log(todos);
        }
        ;
        if (ans.select == "Remove") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Select the task for deleting",
                name: "todos",
                choices: todos.map(task => task),
            });
            let newTodos = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log("Task Removed");
            console.log(todos);
        }
        ;
    } while (true);
}
createTodo(todos);
