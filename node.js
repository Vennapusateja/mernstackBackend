console.log("Hello World");

const readline = require('readline');
const fs = require("fs");

const filePath = __dirname + "/index.text";

// Check if file exists
if (!fs.existsSync(filePath)) {
  console.log("File does not exist");
  
  // Create the file with some default content
  fs.writeFileSync(filePath, "Hello World");
} else {
  console.log("File exists");
}
  console.log(__dirname);