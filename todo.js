const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filePath = path.join(__dirname, "arr.json");

// Load existing todos from file
let arr = [];
if (fs.existsSync(filePath)) {
  const data = fs.readFileSync(filePath, "utf8");
  arr = data ? JSON.parse(data) : [];
}

// Define menu
rl.question("Welcome to CLI TODO \n1. Add todo\n2. View todo\nChoose an option: ", (ans) => {
  switch (ans.trim()) {
    case "1":
      rl.question("Enter todo: ", (todo) => {
        arr.push({
          val: arr.length + 1,
          name: todo,
        });
        fs.writeFileSync(filePath, JSON.stringify(arr, null, 2));
        console.log("✅ Todo added!");
        rl.close();
      });
      break;

    case "2":
      printTodo();
      rl.close();
      break;

    default:
      console.log("❌ Invalid command");
      rl.close();
      break;
  }
});

function printTodo() {
  console.log("\n📝 Your Todos:");
  if (arr.length === 0) {
    console.log("No todos found.");
  } else {
    arr.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo.name}`);
    });
  }
}
