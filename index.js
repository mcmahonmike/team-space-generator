const inquirer = require('inquirer');
const fs = require('fs')

const team = [
    {
        type: 'input',
        name: 'manager',
        message: 'Who is your team manager'
    }
]