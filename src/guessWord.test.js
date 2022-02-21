import React from "react";
import { mount } from "enzyme";

import App from "./App";
import { findyByTestAttr } from "../test/testUtils";
/**
 * Create a wrapper with specified initial conditions,
 * then submit a guessed word of "train"
 * @function
 *
 * @param {object} state - Initial conditions
 * @returns {Wrapper}
 */

const setup = (state = {}) => {
  // TODO: apply state
  const wrapper = mount(<App />);

  const inputBox = findyByTestAttr(wrapper, "input-box");

  inputBox.simulate("change", { target: { value: "train" } });

  const submitButton = findyByTestAttr(wrapper, "input-submit");

  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe("no words guessed", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });

  it("creates GuessedWords table with one row", () => {
    const guessedWordRows = findyByTestAttr(wrapper, "gussedWord");

    expect(guessedWordRows).toHaveLength(1);
  });
});

describe("some words guessed", () => {
	// setup initial state, recall is obj {guessedWord, letterMatchCount}
// assert
  it("creates GuessedWords table with one row per previous guess", () => {
    const guessedWordRows = findyByTestAttr(wrapper, "gussedWord");

    expect(guessedWordRows).toHaveLength(guessedWordRows.length);
  });
});

describe("secret word guessed", () => {
	// what does the initial state need to be? Hint: start w/success fale, go through mechanics to success=true
// testing user interaction
	// what to see , what not to see
	// assert see green Congrats, You guessed teh word!
	// see box of GUessed words w/matching letters
	// input box goes away
});
