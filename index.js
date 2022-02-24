//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
//array of questions for user input
const promptUser = () => {
    return inquirer.prompt([{
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
}, {
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
])};


//function call to initialize app
const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('SAMPLE_README.md', generateMarkdown(answers)))
    .then(() => console.log('File successfully written.'))
    .catch((err) => console.log(err));
};
init();