const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
    {
        type: "input",
        name: "title",
        message: "Name of project"
    },
    {
        type: "checkbox",
        name: "License",
        message: "select liscense of project",
        choices: ["APACHE 2.0", "BOOST 1.0", "BSD 3-Clause", "BSD 2-Clause", "CC0", "EPL 1.0", "IPL 1.0", "ISC", "MIT", "MPL 2.0", "Perl", "OFL 1.1", "none"]
    },
    {
        type: "input",
        name: "description",
        message: "Description of project"
    },
    {
        type: "input",
        name: "usage",
        message: "Languages used in project"
    },
    {
        type: "input",
        name: "tests",
        message: "write test walkthroughs here"
    },
    {
        type: "input",
        name: "installations",
        message: "List installations needed for this project"
    },
    {
        type: "input",
        name: "questions",
        message: "GitHub account"
    }
];

function writeFile(file, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

function readMe() {
    inquirer.prompt(questions).then((responses) => {
        writeFile("./Readme/README.md", generateReadMe({...responses}));
    });
};

function generateReadMe(data) {
    return `# ${data.title}
    ${data.license}
    
    ## Table of Contents
    Description(#description)
    Usage(#usage)
    Tests(#tests)
    Installations(#installations)
    Questions(#questions)
    
    ## Description
    ${data.description}
    
    ## Usage
    ${data.usage}

    ## Tests
    ${data.tests}

    ## Installations
    ${data.installations}

    ## Questions
    ${data.questions}
    `
};



readMe();
//generateReadMe();