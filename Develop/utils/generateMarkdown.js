// function to generate markdown for README
function generateMarkdown(data) {
  // we're dealing with template literal - a string - an object da da da
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
