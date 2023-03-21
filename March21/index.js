import inquirer from 'inquirer';

/**
 * Recursive prompt example
 * Allows user to choose when to exit prompt
 */

const output = [];

const questions = [
  {
    type: 'list',
    name: 'drink',
    message: "Please select a drink to add to your order. Select 'Done' to finish.",
    choices:["Old Fashioned", 
        "Negroni", 
        "Daiquiri", 
        "Dry Martini", 
        "Margarita", 
        "Espresso Martini", 
        "Whiskey Sour", 
        new inquirer.Separator(), 
        "Done",
        new inquirer.Separator()
    ],
  },

  {
    type: 'input',
    name: 'quantity',
    message: 'How many would you like?',
    default: 1,
    validate:(answer) => {
        if (isNaN(answer)){
            return "Please enter the number of drinks you wish to order";
        }else{
            return true;
        }
    },
    when (answers){
        if (answers.drink !== "Done"){
            return true;
        }else{
            return false;
        };
    }
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Would you like to add another drink to your order?',
    default: true,
    when (answers){
        if (answers.drink !== "Done"){
            return true;
        }else{
            return false;
        };
    }
  },
];

function takeDrinksOrder() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.drink != "Done"){
        output.push(answers.drink);
        output.push(answers.quantity);
    }
    if (answers.askAgain) {
        takeDrinksOrder();
    } else {
      console.log(output.join(', '));
    }
  });
}

takeDrinksOrder();