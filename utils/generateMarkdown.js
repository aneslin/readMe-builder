/ TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return `[![license badge](https://img.shields.io/badge/license-${license}-green.svg)](https://shields.io/)`}
  return ''}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'MIT'){
    return 'https://mit-license.org/'
  } else if (license == 'GNU'){
    return 'https://www.gnu.org/licenses/gpl-3.0.html'
  } else if (license == 'BSD'){
    return 'https://choosealicense.com/licenses/bsd-4-clause/'
  }; return ''
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
  return ` ## License
This software is covered under the [${license}](${renderLicenseLink(license)}) license. ` 
  } return ''

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
  
## Table of Contents
- [Description](#description)  
- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  
- [Contribution](#contribution)  
- [Tests](#tests)  
- [Questions](#questions) 
  
## Installation
${data.installation}  

## Usage  
${data.usage}
 
${renderLicenseSection(data.license)}
  
## Contribution
${data.contribution}  
  
## Tests
${data.test}
  
## Questions
Please contact me at ${data.email} with any questions.
  
* [Github Profile](https://github.com/${data.githubId})
  
`;
}

module.exports = generateMarkdown;
