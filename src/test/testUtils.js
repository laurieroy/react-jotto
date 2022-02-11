/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered cmponent (or null if 'success' prop is false)
 */
export const findyByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
