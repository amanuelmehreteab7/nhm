
let
  names = require('starwars-names'),
  Letter = require('./L1.js'),
  l1 = require('./L1.js');


module.exports = class Words{

  constructor(arrayOfLettersFromWord, stringRepresentingWord, guessedCharacter){

    this.arrayOfLettersFromWord = names.random(),
    this.stringRepresentingWord = arrayOfLettersFromWord => {
      for (var i = 0; i < (this.arrayOfLettersFromWord).length; i++)
      {

      console.log(Letter.goodGuessOrNah(arrayOfLettersFromWord[i]));
    }
      //add all of these together add print
      //for loop going through the array that has the word
    },

    this.guessedCharacter = (argFromPrompt) => {
      //answer from the prompt
      //put that into letter.test
      return argFromPrompt;
      // return Letter.test(this.promptanswer

    }
  }



}
