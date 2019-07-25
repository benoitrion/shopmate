import { shallow } from "enzyme";
import React from "react";
import Catalog from "./Catalog";
import ProductList from "../ProductList/ProductList";

describe("Catalog test", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Catalog />);
    expect(
      wrapper.containsMatchingElement(<ProductList products={[]} />)
    ).toEqual(true);
  });
});
