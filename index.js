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
    }
])



}

appMenu();