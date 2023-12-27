import inquirer from "inquirer";
console.log("welcome to word count game");
async function wordCount() {
    let userInput = await inquirer.prompt([
        {
            "type": "input",
            "name": "sentence",
            "message": "enter sentence to count words"
        }
    ]);
    const formatsectence = userInput.sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").trim();
    const wordcount = formatsectence.split(" ").length;
    console.log(wordcount);
}
wordCount();
