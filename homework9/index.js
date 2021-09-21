// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
            name: 'title_of_md',
            },
        ])
        .then((response) => console.log(response.title_of_md)
        );
}

// Function call to initialize app
init();
