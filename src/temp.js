const inquirer = require("inquirer");

generateContribrute = function (data) {
    if(!data){
        return ""
    }
    else{
        return (
        "# Contributor Covenant Code of Conduct "+

        +"\n ## Our Pledge "
        
        +"\n We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation."
        
        +"\n We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community."
        
        +"\n ## Our Standards"
        
        +"\n Examples of behavior that contributes to a positive environment for our community include:"
        
        +"\n * Demonstrating empathy and kindness toward other people"
        +"\n * Being respectful of differing opinions, viewpoints, and experiences"
        +"\n * Giving and gracefully accepting constructive feedback"
        +"\n * Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience"
        +"\n * Focusing on what is best not just for us as individuals, but for the overall"
        +"\n * Focusing on what is best not just for us as individuals, but for the overall community"
        
        +"\n Examples of unacceptable behavior include:"
        
        +"\n * The use of sexualized language or imagery, and sexual attention or advances of any kind"
        +"\n * Trolling, insulting or derogatory comments, and personal or political attacks"
        +"\n * Public or private harassment"
        +"\n * Publishing others' private information, such as a physical or email address, without their explicit permission"
        +"\n * Other conduct which could reasonably be considered inappropriate in a professional setting"
        
        +"\n ## Enforcement Responsibilities"
        
        +"\n Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful."
        
        +"\n Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate."
        
        +"\n ## Scope"
        
        +"\n This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event."
        
        +"\n ## Enforcement"
        
        +"\n Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at"
        +"\n [INSERT CONTACT METHOD]."
        +"\n All complaints will be reviewed and investigated promptly and fairly."
        
        +"\n All community leaders are obligated to respect the privacy and security of the reporter of any incident."
        
        +"\n ## Enforcement Guidelines"
        
        +"\n Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:"
        
        +"\n ### 1. Correction"
        
        +"\n **Community Impact**: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community."
        
        +"\n **Consequence**: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested."
        
        +"\n ### 2. Warning"
        
        +"\n **Community Impact**: A violation through a single incident or series of actions."
        
        +"\n **Consequence**: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban."
        
        +"\n ### 3. Temporary Ban"
        
        +"\n **Community Impact**: A serious violation of community standards, including sustained inappropriate behavior."
        
        +"\n **Consequence**: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban."
        
        +"\n ### 4. Permanent Ban"
        
        +"\n **Community Impact**: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.`)"
        )
    }
}

generateLicense = function (data) {
    console.log(data)
    
        if(data === "Apache 2.0"){
            return(
                "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)"
                )
            }

        if(data === "Boost"){
            return(
                "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
                )
            }

        if(data === "BSD"){
            return(
            "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)"
            )
        }
    
}

const readmeTemp = (questionData) => {
    console.log(questionData);
    return (
   
    " # " + questionData.title 
    
    + "\n ## Description "
    +"\n " + questionData.description
    
    + "\n ## Table of Contents" 
    + "\n * [Installation](#installation)" 
    + "\n * [Usage](#usage)"
    + "\n * [Credits](#credits)"
    + "\n * [License](#license)"
    
    +"\n ## Installation"
    +"\n" + questionData.installation

    +"\n ## Usage "
    +"\n " + questionData.usage

    +"\n ## Credits " 
    +"\n " + questionData.credit

    +"\n ## License "
    +"\n " + questionData.license

    +" \n ## Badges "
    +"\n " + generateLicense(questionData.license)
    

    +"\n ## Features "
    

    +"\n ## Contributing "
    +"\n " + generateContribrute(questionData.contribution)
    

    +"\n ## Testing "
    +"\n" + questionData.testing
    
    +"\n ## Questions "

    +"\n Made by " + questionData.username +"\n"

    +"\n https://github.com/"+ questionData.github +"\n"

    +"\n " + questionData.email




    )
    
}

module.exports = readmeTemp