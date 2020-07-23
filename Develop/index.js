// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// DEPENDENCIES============================================

const inquirer = require("inquirer");
var fs = require("fs");
var genMarkdown = require("Develop/utils/generateMarkdown.js");

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
      "PythonGNU General Public License v3.0",
      "MIT License",
      "Boost Software License 1.0",
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
function writeToFile(fileName, data) {}

// function to initialize program (*kicking things off)

function init() {
  // prompt question for the user inquirer module
  inquirer.prompt(questions).then(function (response) {
    writeToFile("README.md", genMarkdown(response));
    console.log(response);
  });
}

// function call to initialize program
init();
