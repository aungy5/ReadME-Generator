const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (answers) =>
  `# ${answers.title}
  ## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contributions](#contributions)
[License](#license)
[Contact Info](#contact-info)

  # Description
  ${answers.description}
  # Installation
  ${answers.installation}
  # Usage
  ${answers.usage}
  # Contribution Guidelines
  ${answers.contributions}
  # Testing Instructions
  ${answers.testing}
  # License
  [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license}

  ### Contact Info
  Github URL: github.com/${answers.github}

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
        message: 'Please add contribution guidelines for your project here.',
      },
      {
        type: 'input',
        name: 'testing',
        message: 'Please add test instructions for your project here.',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Please select the relevant license for your project.',
        choices: ['mit','artistic-2.0','ncsa','gpl','isc','postgresql','zlib']
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