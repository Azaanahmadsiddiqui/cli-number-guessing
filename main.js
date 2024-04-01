import inquirer from "inquirer";
// 1) Computer will generate a random number - 
// 2) User input for guessing number - 
// 3) Compare user input with computer generated number and show result -
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        message: "Please guess a number between 1-10: ",
        type: "number"
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("You guessed right number!!!");
}
else {
    console.log("You guesed wrong number!!!");
}
