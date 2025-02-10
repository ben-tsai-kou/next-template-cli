#!/usr/bin/env node
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
    ])
    .then((answers) => {
        console.log(`Hi ${answers.name}!`);
    });
