const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUT_DIR, 'team.html');

const teamMembers = [];
const idArray = [];

function appMenu() {
console.log('Please build your team');
inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?",
        validate: answer => {
            if(answer !== "") {
                return true;
            }
            return 'Please enter at leat one character!';
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's id?",
        validate: answer => {
            const pass = answer.match(/^[1-9]\d*$/);
            if(pass){
                return true;
            }
            return "Please enter a positive number greater than zero.";
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email?",
        validate: answer => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if(pass){
                return true;
            }
            return "Please enter a valid email address.";
        }
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the team manager's office number?",
        validate: answer => {
            const pass =answer.match(/^[1-9]\d*$/);
            if(pass){
                return true;
            }
            return "Please enter a positive number greater than zero.";
        },
    },
]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamMembers.push(manager);
    idArray.push(answers.managerId);
    createTeam();
})
}

function createTeam() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: "WHich type of team member would you like to add?", 
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members",
            ]
        }
    ]).then(userChoice => {
        switch(userChoice.memberChoice){
        case 'Engineer':
            addEngineer();
            break;
            case 'Intern':
                addIntern();
                break;
                default:
                    buildTeam();
        }
        })
}

appMenu();