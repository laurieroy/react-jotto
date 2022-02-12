import React, { Component } from "react";
import { shallow } from "enzyme";

import { findyByTestAttr, checkProps } from "./test/testUtils";

import Input from "./Input";

// const defaultProps = {
//   guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
// };

/**
 *
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = () => {
  // const setupProps = { ...defaultProps, ...props };

  return shallow(<Input />);
};

it("renders without error", () => {
  const wrapper = setup();
  const inputComponent = findyByTestAttr(wrapper, "component-input");

  expect(inputComponent.length).toBe(1);
});
