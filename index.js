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
        name: 'repo',
        message: "What is the name of your Github Repo? ",
        default: 'readme-generator'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project? "
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
        type: 'confirm',
        name: 'contribution',
        message: "would you like to add contribution guidelines? "
    },
    {
        type: 'confirm',
        name: 'testing',
        message: "would you like to add testing instructions ? "
    },

    {
        type: 'list',
        name: 'license',
        message: 'What ype of license would you like? ',
        choices: ['Apache 2.0','Boost','BSD' ],
        
    },
]


// const gererateReadme = (questionData) => {
//     fs.writeFile("READme.md", questionData, err => {
//         if(err) {
//             console.error(err)
//             return
//         }
//         else{
//             console.log("it worked")
//         }
//     })

// }


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, JSON.stringify(data), err => {
//         if (err) {
//             console.error(err)
//             return
//         }
//         else {
//             console.log("it worked")
//         }
//     })
// }

const writeReadMe = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./testing/README.md',fileContent, err => {
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
