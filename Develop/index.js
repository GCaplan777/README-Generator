// DEPENDENCIES============================================

const inquirer = require("inquirer");
var fs = require("fs");
var genMarkdown = require("./utils/generateMarkdown.js");

// array of questions (to prompt user)
const questions = [
  // title
  {
    type: "input",
    message: "Enter Repository",
    name: "title",
  },
  // description
  {
    type: "input",
    message: "Enter Description",
    name: "description",
  },
  // Installation
  {
    type: "input",
    message: "Enter Intallation Instructions",
    name: "installation",
  },
  // Usage
  {
    type: "input",
    message: "Enter Tech Used",
    name: "usage",
  },
  // License
  {
    type: "list",
    message: "Choose License",
    name: "license",
    choices: [
      "Apache License 2.0",
      "Boost Software License 1.0",
      "MIT License",
    ],
  },
  // Contributing
  {
    type: "input",
    message: "Enter Contributing Members",
    name: "contributing",
  },
  // Tests
  {
    type: "input",
    message: "Enter Test Notes",
    name: "tests",
  },
  // Contact-Github
  {
    type: "input",
    message: "Enter Github user name",
    name: "username",
  },
  // Contact-email address
  {
    type: "input",
    message: "Enter Email address",
    name: "email",
  },
  // 1 badge shows up
];

// Functions========================

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Success!");
  });
}

// function to initialize program

function init() {
  // prompt question for the user inquirer module
  inquirer.prompt(questions).then(function (response) {
    writeToFile("README.md", genMarkdown(response));
    console.log(response);
  });
}

// function call to initialize program
init();
