import React from "react";
/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - guessedWord
 * @param {string} secretWord  -secretWord
 * @returns {number} - Number of letters matched between guessed and secret words.
 */
export function getLetterMatchCount(guessedWord, secreatWord) {
  const secretLetters = secreatWord.split("");
  const guessedLetterSet = new Set(guessedWord);

  return secretLetters.filter((letter) => guessedLetterSet.has(letter)).length;
}
