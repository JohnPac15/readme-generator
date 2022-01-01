// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');


const readmeTemp = require('./src/temp.js');
const Choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const Questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true
            }
            else {
                console.log("please enter your name")
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email ",
        default: 'Johnpac15@yahoo.com'
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your Github username? ",
        default: 'Johnpac15'
    },
    {
        type: 'input',
        name: 'repo',
        message: "What is the name of your Github Repo? ",
        default: 'readme-generator'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project? ",
        default: "Readme Generate"
    },
    {
        type: 'input',
        name: 'feature',
        message: "Please add any features you would like to showcase"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please enter a discription of the project",
        validate: projectTitle => {
            if (projectTitle.length < 1) {
                return console.log("A valid project discription required")
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please enter the installation instructions"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please enter some usage examples of the project"
    },
    {
        type: 'input',
        name: 'credit',
        message: "Please list everyone who deserves credit for this project"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license would you like? ',
        choices: ['Apache 2.0','Boost','BSD' ],
        
    },
    {
        type: 'confirm',
        name: 'contribution',
        message: "would you like to add contribution guidelines? "
    },
    {
        type: 'input',
        name: 'testing',
        message: "Please add some testing instructions ? "
    },
]

const writeReadMe = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./utils/README.md',fileContent, err => {
            if(err){
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: "file created"
            })
        })
    })
}
// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(Questions)
    .then(questionData => readmeTemp(questionData)) 
    .then(questionData => writeReadMe(questionData))

}
        
    

// Function call to initialize app
init();
