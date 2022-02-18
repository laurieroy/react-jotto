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
const setup = (success = false, secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} sucess={success} />);
};

describe("render", () => {
  describe("success is true", () => {
    let wrapper 

    beforeEach(()=>{
     wrapper = setup(true);
    })

    it("Input renders without error", () => {
   
      const inputComponent = findyByTestAttr(wrapper, "component-input");
    
      expect(inputComponent.length).toBe(1);
    });

    it("input box does not show", () => {
      const inputBox = findyByTestAttr(wrapper, "input-box")

      expect(inputBox.exists()).toBe(false);
    })

    it("submit button does not show", () => {
      const submitBtn = findyByTestAttr(wrapper, "input-submit")

      expect(submitBtn.exists()).toBe(false);
    })
  });

  describe("success is false", () => {
    let wrapper 

    beforeEach(()=>{
     wrapper = setup(false);
    })

    it("renders without error", () => {
   
      const inputComponent = findyByTestAttr(wrapper, "component-input");
    
      expect(inputComponent.length).toBe(1);
    });

    it("input box shows", () => {
      const inputBox = findyByTestAttr(wrapper, "input-box")

      expect(inputBox.exists()).toBe(true);
    })

    it("submit button shows", () => {
      const submitBtn = findyByTestAttr(wrapper, "input-submit")

      expect(submitBtn.exists()).toBe(true);
    })
  });
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
    const inputSubmitBtn = findyByTestAttr(wrapper, "input-submit");

    inputSubmitBtn.simulate("click", { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });

  // it("renders correctly when ");
});
