import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import { findyByTestAttr } from "./test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });
/**
 * Factory function to create a ShallowWrapper for the Congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

it("renders without error", () => {
  const wrapper = setup();
  const component = findyByTestAttr(wrapper, "component-congrats");

  expect(component.length).toBe(1);
});

it("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findyByTestAttr(wrapper, "component-congrats");

  expect(component.text()).toBe("");
});
it("renders text congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findyByTestAttr(wrapper, "congrats-message");

  expect(message.text().length).not.toBe(0);
});
