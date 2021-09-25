// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util1 = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['what is the title of md?', 
'installation instructions?', 
'usage information?', 
'contribution guidelines', 
'test instructions', 
'description',
'github user name?'];

// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile('README.md', data, (err) => err ? 
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
            {
                type: 'input',
                message: questions[1],
                name: 'install_instruction',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'usage_information',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'contribution_guidelines',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'test_instructions',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'description',
            },
            {
                type: 'list',
                message: 'Please select the license below',
                name: 'license',
                choices: ['MIT'],
            },
            {
                type: 'input',
                message: questions[6],
                name: 'username',
            },
        ])
        .then((response) => writeToFile(util1.generateMarkdown(response))
        );
}

// Function call to initialize app
init();
