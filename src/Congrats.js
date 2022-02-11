import React from "react";
// rx success state as a prop
// if true, render congrats
// if false, return null
/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered cmponent (or null if 'success' prop is false)
 */

const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
export default Congrats;
