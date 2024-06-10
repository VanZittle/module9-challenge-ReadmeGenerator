// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(userName, repoName) {
  return `![GitHub](https://img.shields.io/github/license/${userName}/${repoName}?style=for-the-badge)<br>`
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(userName, repoName) {
  return `https://github.com/${userName}/${repoName}/blob/main/LICENSE`
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license, userName, repoName) {
  const licenseBadge = renderLicenseBadge (userName, repoName)
  const licenseLink = renderLicenseLink(userName, repoName)
    
  if (license) return `${licenseBadge} Go to license [here](${licenseLink})`
    else return `No license`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, userStoryDesc, acceptanceCriteria, descriptionImg, license, userName, repoName}){
  const licenseContent = renderLicenseSection(license, userName, repoName)
  const projectURL = `https://github.com/${userName}/${repoName}`
  const readmeContent = `
# ${title}
  
${description}
  
## User story
  
${userStoryDesc}
  
## Acceptance criteria
  
${acceptanceCriteria}
  
## Go to my project
  
To visit and review my project, [click here](${projectURL})
  
## Visual reference of project
The following image demonstrates the app's appearance:
  
[${descriptionImg}](./assets/images/challenge_appReference.gif)
  
![](./Assets/challenge_appReference.gif)

## License
${licenseContent}
  
Markdown generated with **[README Creator](https://github.com/VanZittle/module9-challenge-ReadmeGenerator)**`;
return readmeContent;

};

module.exports = generateMarkdown;
