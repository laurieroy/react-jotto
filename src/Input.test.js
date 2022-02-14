import React from "react";
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

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let originalUseState;
  let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  it("state updates with value of input box upon change", () => {
    const inputBox = findyByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };

    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  it("clears field when submit is clicked", () => {
    const inputSubmit = findyByTestAttr(wrapper, "input-submit");

    inputSubmit.simulate("click", { preventDefault() {}});

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
