// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return '#LicenseBadge\n\nhttps://img.shields.io/github/issues/soobin-lim/homework9.git';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return '# License\n\nLicensed under the [MIT LICENSE](LICENSE)';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // make LICENSE file in folder (if not exists)
  const myLicense = `MIT License

  Copyright (c) 2021 Soobin
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`
  return myLicense;
}

function githubProfileURL(username){
  return `# Git hub profile\n\nhttps://github.com/${username}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
const result = `# ${data.title}
\n# install_instruction\n
${data.install_instruction}
\n# Usage information\n
${data.usage_information}
\n# Contribution guidelines\n
${data.contribution_guidelines}
\n# Test instructions\n
${data.test_instructions}
\n# Description\n
${data.description}
${githubProfileURL(data.username)}\n
${renderLicenseBadge()}\n
${renderLicenseLink()}\n`
  return result;
}

module.exports = {generateMarkdown};
