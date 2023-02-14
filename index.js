const inquirer = import('inquirer');
const fs = require('fs');
const { type } = require('os');



//TODO: take arguements (cml-prompts)
inquirer.prompt([
    {
        name: 'user_name',
        type: 'input',
        question: 'What is your name?',
    },
])
    .then((answer) => {
        console.log(answer.user_nameod)
});

//TODO: create file with information taken from the cml 
