
const
     names = require('starwars-names'),
     inquirer = require('inquirer'),
     word = require('./Word.js'),
     l1 = require('./L1.js'),
     hgw = names.random();

 let
      questions = [],
      value;

      var npm = new word;

console.log('Hi, welcome to Star Wars Hangman');

questions = [{
  name: `fiver`,
  type: `confirm`,
  message: `Do you know what movie is ${hgw} is from Star Wars`

}
];

inquirer.prompt(questions).then(answers => {
    if (answers){
      return console.log(npm.guessedCharacter(hgw));
      // return word.guessedCharacter('ok');
    }
    return names.all;

  // }
  // console.log(answers, `a`);
  // console.log(JSON.stringify(answers, null, '  '));
});
// console.log(name.all);
