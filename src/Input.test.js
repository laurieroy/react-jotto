import React, { Component } from "react";
import { shallow } from "enzyme";

import { findyByTestAttr, checkProps } from "./test/testUtils";

import Input from "./Input";

// const defaultProps = {
//   secretWord: "party",
// };

/**
 *
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
// const setup = (props) => {
//   const setupProps = { ...defaultProps, ...props };

//   return shallow(<Input {...setupProps} />);
// };
const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

it("renders without error", () => {
  const wrapper = setup();
  const inputComponent = findyByTestAttr(wrapper, "component-input");

  expect(inputComponent.length).toBe(1);
});

it("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});
