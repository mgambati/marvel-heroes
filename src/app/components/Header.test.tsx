import React from "react";
import { Header } from "./Header";
import { render } from "../helpers/test-utils";

test("renders correctly", () => {
  const { container } = render(<Header />);

  expect(container).toMatchSnapshot();
});
