import React from "react";
import PropTypes from "prop-types";

function Input({ secretWord, success }) {
  const [currentGuess, setCurrentGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: add current guess to guessedWords
    // TODO: Check guess against secretWord
    // TODO: Update success if match
    setCurrentGuess("");
  };

  if (success) {
    return <div data-test="component-input"></div>;
  }
    
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          type="submit"
          data-test="input-submit"
          className="btn btn-orimary mb-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
