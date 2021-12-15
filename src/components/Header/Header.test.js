import React from "react";
import { shallow } from "enzyme";
import Header from "./Head";

describe("Header", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
