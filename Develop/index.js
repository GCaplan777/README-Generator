// array of questions (might use spread into array?)
const questions = [];
// store the user data
const inquirer = require("inquirer");
// fs - for file working
var fs = require("fs");

// run generate Mardown function========================
// function to write README file
// (*defined not called) grab that FS to turn string into file module maybe append?
function writeToFile(fileName, data) {}

// function to initialize program (*kicking things off)
function init() {
  // prompt question for the user
  // inquirer module
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your title?",
        name: "title",
      },
    ])
    .then(function (response) {
      var fs = require("fs");
      fs.writeFile("log.txt", JSON.stringify(response), function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      });
    });
  // Title
  // Description
  // Table of Contents
  // Installation
  // Usage
  // License
  // Contributing
  // Tests
  // Questions
  // 1 badge
  // emails -------------- finish the list
}

// function call to initialize program
init();
