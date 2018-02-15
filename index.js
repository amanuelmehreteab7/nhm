
const
     names = require('starwars-names'),
     inquirer = require('inquirer'),
     word = require('./Word.js'),
     l1 = require('./L1.js');

 let
      questions = [],
      value;

console.log('Hi, welcome to Star Wars Hangman');

questions = [{
  name: `fiver`,
  type: `confirm`,
  message: `Do you know what movie is ${names.random()} is from Star Wars`

}
];

inquirer.prompt(questions).then(answers => {
    if (answers){
      return word.Words.guessedCharacter('ok');
    }
    return names.all;

  // }
  // console.log(answers, `a`);
  // console.log(JSON.stringify(answers, null, '  '));
});
// console.log(name.all);
