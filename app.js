const chalk = require('chalk');

console.log(chalk.blue('Hello'));

console.log(chalk.red('This is an error'));

console.log(chalk.rgb(100,150,60)('This is RGB color'));

console.log(chalk.bgGreen('Thsis GREEN  color'));

console.log(chalk.bgBlackBright('Thsis GREEN  color'));

console.log('text in', chalk.bold("BOLD"));

console.log('text in', chalk.dim("dim"));

console.log('text in', chalk.italic("Italics"));

console.log('text in', chalk.underline("Underline"));

console.log("Hello %s", "All");




