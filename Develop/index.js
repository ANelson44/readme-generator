// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of the purpose and functionality of the project.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose an applicable license',
        choices: ('MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'none'),
    },
    {
        type: 'input',
        name: 'require',
        message: 'List any required dependencies.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Which languages or technologies are used for this project?'
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Write your GitHub username',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your first and last name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your preferred email address?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'list any other contributors if applicable (use GitHub usernames)',
        default: '',
    },
    {
        type: 'input',
        name: 'test',
        message: 'list details of any testing if applicable.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('Creating Professional README.md File...');
        writeToFile('./dist/README.md', generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
