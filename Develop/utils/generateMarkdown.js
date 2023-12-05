// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n [License](#license)\n`;
  }
  return '';
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
      Licensed under the ${license} license`;
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Requirements](#requirements)
  * [Usage](#usage)
  //  TODO: questions link is broken in table of contents - FIX
  * [Questions](#questions?-here-is-how-to-contact-me)
  * [Contributors](#contributors)
  * [Testing](#testing)
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Requirements
  ${data.require}
  ## Usage
  ${data.usage}
  ## Questions? - Here is how to contact me
  * Name - ${data.name}
  * Email - ${data.email}
  * GitHub - [${data.github}](https://github.com/${data.github}/)
  ## Contributors
  ${data.contributors}
  ## Testing
  \`\`\`
  ${data.test}
  \`\`\`
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
