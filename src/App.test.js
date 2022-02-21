import { shallow } from "enzyme";
import App from "./App";

import { findyByTestAttr } from "../test/testUtils";

/**
 * Setup function for App component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findyByTestAttr(wrapper, "component-app");

  expect(appComponent).toHaveLength(1);
});
