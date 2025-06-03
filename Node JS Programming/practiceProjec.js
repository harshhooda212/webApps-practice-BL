const employees = [
  { id: 1, name: "Harsh", tasksCompleted: 5 },
  { id: 2, name: "Rupesh", tasksCompleted: 8 },
  { id: 3, name: "Mayank", tasksCompleted: 2 },
];


function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}


greet.call(employees[0], "Hello", "!");  
greet.apply(employees[1], ["Hi", "."]);  
const greetCharlie = greet.bind(employees[2], "Hey", "!!");
greetCharlie();

function TasksForEmployee(employeeId) {
  return new Promise((resolve) => {
    setTimeout(() => {
    
      const tasks = [
        { taskId: 101, employeeId: 1, task: "Prepare report" },
        { taskId: 102, employeeId: 2, task: "Fix bugs" },
        { taskId: 103, employeeId: 1, task: "Team meeting" },
        { taskId: 104, employeeId: 3, task: "Code review" },
        { taskId: 105, employeeId: 2, task: "Deploy app" },
      ];
      const employeeTasks = tasks.filter(t => t.employeeId === employeeId);
      resolve(employeeTasks);
    }, 1000);
  });
}


async function Tasks() {
  for (const emp of employees) {
    const tasks = await TasksForEmployee(emp.id);
    console.log(`Tasks for ${emp.name}:`);
    const taskNames = tasks.map(t => t.task);
    console.log(taskNames.length > 0 ? taskNames.join(", ") : "No tasks found");
  }
}

const totalTasks = employees.reduce((sum, emp) => sum + emp.tasksCompleted, 0);

console.log(`\nTotal tasks completed by all employees: ${totalTasks}`);

const productiveEmployees = employees.filter(emp => emp.tasksCompleted > 4);

console.log("\nEmployees with more than 4 tasks completed:");

productiveEmployees.forEach(emp => console.log(employee.name));


Tasks();
