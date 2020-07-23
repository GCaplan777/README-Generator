// function to generate markdown for README
function generateMarkdown(data) {
  // we're dealing with template literal - a string - an object da da da
  return `# ${data.title} 
  ## Description
   ${data.description}
  
  ## Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.username}
  ${data.email}
`;
}

module.exports = generateMarkdown;
