const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {name:"title",
     type: "input",
     message: "What is the title of your project?"    
    },

    {name:"description",
    type: "input",
    message: "Describe your project."    
   },
   {name:"installation",
   type: "input",
   message: "What is required to install your project?"    
  },
  {name:"usage",
  type: "input",
  message: "How is your project used?"    
 },
 {name:"license",
 //make choices with license choices. use object
 type: "list",
 choices: ['MIT',
  'GNU','BSD'],
 message: "What is the license for your project?"    
},
{name:"contribution",
type: "input",
message: "How can people contribute to your project?"    
},

{name:"test",
type: "input",
message: "What tests are used in your project?"    
},

{
name:"githubId",
type: 'input',
message: "What is your github user name"
},
{
name: "email",
type: "input",
message: "What is your email address"
}


];

// TODO: Create a function to write README file
function writeToFile(filename, data) {


    fs.writeFile(filename, data, (err)=> {if (err) {console.log(err)}
    else {
        console.log("readme generated")
}  }) 
}
    

// TODO: Create a function to initialize app
function init(questions, output) {inquirer.prompt(questions).then(response => {
    writeToFile(output, generateMarkdown(response))
 })
}
// Function call to initialize app
init(questions,'./dist/readme.md')
