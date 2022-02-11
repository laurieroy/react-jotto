// rx success state as a prop
// if true, render congrats
// if false, return null
/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered cmponent (or null if 'success' prop is false)
 */
import React from "react";

const Congrats = ({ success }) => {
  return <div>Congrats</div>;
};

export default Congrats;
