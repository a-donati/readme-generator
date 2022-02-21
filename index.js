//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
//array of questions for user input
const questions = [{
    type: "input",
    message: "Please enter your project name:",
    name: "projectName",
},
{
    type: "input",
    message: "Please enter your project description:",
    name: "projectDescription"
},
{
    type: "input",
    message: "Please enter installation instructions:",
    name: "installation",
},{
    type: "input",
    message: "Please enter usage information:",
    name: "usage",
},
{
    type: "input",
    message: "Please enter any credits for this application:",
    name: "credits",
},
{
    type: "list",
    choices: [
        "Please contact the author to be added as a collaborator to this project.",
        "No contributions are being accepted at this time."
    ],
    message: "Select an option for the contribution guidelines:",
    name: "contribution"
}, {
    type: "input",
    message: "Enter test information:",
    name: "test",
}, {
    type: "list",
    choices: [
        "GNU GPLv3",
        "Apache License 2.0",
        "MIT License",
        "No license"
    ],
    message: "Select a license from the list:",
    name: "license",
},
{
    type: "input",
    message: "Enter your Github username:",
    name: "userName",

},
{
    type: "input",
    message: "Enter your email address:",
    name: "email",
}, {
    type: "input",
    message: "Enter your full name for the license:",
    name: "fullName",
},
{
    type: "input",
    message: "Please enter the year the application was created:",
    name: "year",
}
];

//use inquirer.prompt to get input from the user
// const promptUser = () => {
    function promptUser(questions){
    inquirer.prompt(questions).then((response) => {
        writeToFile("SAMPLE_README.md", generateMarkdown(response))
    }
    )}

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        err ? console.error(err) : console.log("File written")
    })
}

//function to initialize app
function init() {
    promptUser(questions);
}

//function call to initialize app
init();
