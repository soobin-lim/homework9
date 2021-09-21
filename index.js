// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util1 = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['what is the title of md?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)? 
        console.log(err) : console.log('success'));
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
            type: 'input',
            message: questions[0],
            name: 'title',
            },
        ])
        .then((response) => console.log(util1.generateMarkdown(response))
        );
}

// Function call to initialize app
init();
