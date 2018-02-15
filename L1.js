'use strict';

module.exports = class Letter{
  constructor(letter, bo, goodGuessOrNah, guessedLetter){
    this.letter = letter,
    this.bo = false,
    this.goodGuessOrNah = letter => {
      if (this.bo === true){
        return this.letter;
      }
      else{
        return '- ';
      }
    },
    this.guessedLetter = letter => {
        for (var i = 0; i < arrayOfLettersFromWord.length; i++) {
          if (letter === arrayOfLettersFromWord[i]) return Letter.bo = true;
        }
    }
  }
};
