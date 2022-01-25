const fs = require('fs');
const inquirer = require('inquirer');


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


]

inquirer.prompt(questions).then(response => {
    


    console.log(response)
    const md = `
# ${response.title}
[![license badge](https://img.shields.io/badge/license-${response.license}-green.svg)](https://shields.io/)

## Table of Contents

- [Installation](#installation)  
- [Description](#description)  
- [Usage](#usage)  
- [License](#license)  
- [Contribution](#contribution)  
- [Tests](#tests)  
- [Questions](#questions)  
  
## Description
${response.description}

## Installation
${response.installation}  

## Usage  
${response.usage}

## License
This software is covered under the ${response.license} license.  

## Contribution
${response.contribution}  

## Tests
${response.test}

## Questions
Please contact me at ${response.email} with any question

* [Github Profile](https://github.com/${response.githubId})


`


    fs.writeFile('README.md', md, (err)=> {if (err) {console.log(err)}
    else {
        console.log("readme generated")
    }
    })
})