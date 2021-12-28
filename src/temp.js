

const readmeTemp = (questionData) => {
    console.log(questionData);
    return (
   
    " # " + questionData.title 
    
    + "\n ## Description " +
    questionData.description
    
    + "\n ## Table of Contents" 
    + "\n * [Installation](#installation)" 
    + "\n * [Usage](#usage)"
    + "\n * [Credits](#credits)"
    + "\n * [License](#license)"
    
    +"\n ## Installation"
    +"\n" + questionData.installation

    +"\n ## Usage "
    +"\n " + questionData.usage

    // ## Credits

    // ## License

    // ## Badges

    // ## Features

    // ## Contributing
    

    // ## Tests
    



    )
    
}
    module.exports = readmeTemp