// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require ('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What's the name of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: 'Add a nice description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Add the User Story:',
        name: 'userStoryDesc',
    },
    {
        type: 'input',
        message: 'Add the Acceptance Criteria:',
        name: 'acceptanceCriteria',
    },
    {
        type: 'input',
        message: "What's your Github user name?",
        name: 'userName',
    },
    {
        type: 'input',
        message: "What's your Github repo name?",
        name: 'repoName',
    },
    {
        type: 'input',
        message: 'Add a description for the Refence Image:',
        name: 'descriptionImg',
    },
    {
        type: 'confirm',
        message: 'Does your project has a license included?',
        name: 'license',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
