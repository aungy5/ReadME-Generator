const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (answers) =>
  `[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

  # ${answers.title}
  ## Table of Contents
- [Description](#description)

- [Installation](#installation)

- [Usage](#usage)

- [Contributors](#contributors)

- [Testing](#testing)

- [Questions](#questions)

- [License](#license)

  ## Description
  ${answers.description}
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Contributors
  ${answers.contributions}
  ## Testing
  ${answers.testing}
  ## License
  Click the license badge at the top of the ReadME to learn more about the license for this project. 

  ## Questions

  Please contact me with any questions using either of the avenues below. 

  Github URL: https://github.com/${answers.github}

  Email: ${answers.email}`;

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project in 3-4 sentences.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please add usage information regarding your project here.',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Please list any additional contributors for your project here.',
      },
      {
        type: 'input',
        name: 'testing',
        message: 'Please add test instructions for your project here.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select the relevant license for your project.',
        choices: ['MIT','IDM','NCSA','GPL','ISC','Zlib']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
  ])
  .then((answers) => {
    const ReadMeContent = generateReadMe(answers);

    fs.writeFile('ReadME.md', ReadMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadME.md!')
    );
  });