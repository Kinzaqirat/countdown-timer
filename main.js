#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold(`Welcome to countdown timer`));
let answer = await inquirer.prompt([
    {
        name: "userTime",
        type: "number",
        message: "Enter your time limites in seconds"
    }
]);
let { userTime } = answer;
function startTime() {
    function startNow() {
        if (userTime > 0) {
            console.log(userTime);
            setTimeout(startNow, 1000);
            userTime--;
        }
    }
    startNow();
}
startTime();
