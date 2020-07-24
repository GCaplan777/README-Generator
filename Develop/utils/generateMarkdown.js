const apache =
  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

const boost =
  "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

const mit =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

const apacheLic = [
  "Apache License <br>" +
    "Version 2.0, January 2004<br>" +
    "http://www.apache.org/licenses/",
];

const boostLic = [
  "Boost Software License <br>" +
    "Version 1.0 <br>" +
    "August 17th, 2003 <br>" +
    "https://www.boost.org/LICENSE_1_0.txt",
];

const mitLic = [
  "License Copyright: Unknown. <br>" + "https://opensource.org/licenses/MIT",
];

let badge;
let lic;

// function to generate markdown for README
function generateMarkdown(data) {
  // we're dealing with template literal - a string
  if (data.license === "Apache License 2.0") {
    badge = apache;
  } else if (data.license === "Boost Software License 1.0") {
    badge = boost;
  } else {
    badge = mit;
  }

  if (data.license === "Apache License 2.0") {
    lic = apacheLic;
  } else if (data.license === "Boost Software License 1.0") {
    lic = boostLic;
  } else {
    lic = mitLic;
  }

  return `# ${data.title} 
  ## Description
   ${data.description}

  ${badge}

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
 
  ${lic}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  https://github.com/${data.username}
  ${data.email}
`;
}

module.exports = generateMarkdown;
