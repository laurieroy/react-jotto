import checkPropTypes from "prop-types/checkPropTypes";

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered cmponent (or null if 'success' prop is false)
 */
export const findyByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};
