const inquirer = require('inquirer');
const fs = require('fs')
const generateHTML = require('./src/generateHTML')

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
// Empty Array to hold team members
const team = []

// Prompt questions for team manager
const managerPrompt = () => {
const prompts = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?'
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the team manager ID number?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the team manager email address?'
    },

    {
        type: 'number',
        name: 'officeNumber',
        message: 'What is the team manager office number?'
    },

]
// Runs inquirer and pushes to the empty team array
inquirer.prompt(prompts)
.then(({name, id, email, officeNumber}) => {
    const manager = new Manager(name, id, email, officeNumber)
    team.push(manager)
    finishTeam()
})
}
// Prompt questions for Engineers
const engineerPrompt = () => {
const prompts = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Engineer?'
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the Engineer ID number?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the Engineer email address?'
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is the Engineer GitHub username?'
    },

]
inquirer.prompt(prompts)
.then(({name, id, email, github}) => {
    const engineer = new Engineer(name, id, email, github)
    team.push(engineer)
    finishTeam()

})
}

// Prompt questions for Interns
const internPrompt = () => {
const prompts = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team Intern?'
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the team Intern ID number?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the team Intern email address?'
    },

    {
        type: 'input',
        name: 'school',
        message: 'What is the team Intern school name?'
    },

]
inquirer.prompt(prompts)
.then(({name, id, email, school}) => {
    const intern = new Intern(name, id, email, school)
    team.push(intern)
    finishTeam()
})
}
// Function to display options for adding more team members
const finishTeam = () => {
    const prompts = [
    {
        type: 'list',
        name: 'role',
        message: 'Would you like to add an Engineer or Intern or are you finished building the team?:',
        choices: ['Engineer', 'Intern', new inquirer.Separator, 'Finish Team']
    },
]
// switch case to change role depending on user input
inquirer.prompt(prompts)
.then(({role}) => {
   switch(role) {
       case "Engineer":
           engineerPrompt()
           break;
        case "Intern":
            internPrompt()
            break;
      
       default: 
       console.log('team is finished and page building')
       generateTeamPage()
       break;
   }
})

}
//function to write the HTML page
function generateTeamPage() {
    fs.writeFile('./dist/index.html', generateHTML(team), err => {
                     if (err) throw new Error(err)
})
console.log('build is successful')
}
managerPrompt()

