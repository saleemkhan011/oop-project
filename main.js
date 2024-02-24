import inquirer from "inquirer";
import chalk from 'chalk';
class Person {
    constructor() {
        this._personality = 'Mystery';
    }
    userInput(input) {
        if (input === '1. You talk to others about yourself openly.') {
            this._personality = 'Introvert';
        }
        else if (input === '2. You keep your words to yourself only.') {
            this._personality = 'Extrovert';
        }
        else {
            this._personality = 'Mystery';
        }
    }
    get personality() {
        return this._personality;
    }
}
class Main {
    async main() {
        const ans = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: chalk.green('Select your Behaviour: '),
            choices: ['1. You talk to others about yourself openly.', '2. You keep your words to yourself only.']
        });
        // Creating an instance of the 'Person' class
        let myPerson = new Person();
        // Asking the user input
        myPerson.userInput(ans.choice);
        // Displaying the user's personality based on their response
        console.log(`You are ${myPerson.personality}`);
    }
}
// Creating an instance of the 'Main' class
const myObject = new Main();
// Calling the 'main' method to execute the program logic
myObject.main();
