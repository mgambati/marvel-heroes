import React from "react";
import { render } from "@testing-library/react";
import BaseLayout from "./BaseLayout";

test("renders the header", () => {
  const { getByText } = render(<BaseLayout header={<header>header</header>} />);

  expect(getByText(/header/i)).toBeInTheDocument();
});

test("renders the children", () => {
  const { getByText } = render(
    <BaseLayout header={<></>}>
      <main>sample main content</main>
    </BaseLayout>
  );

  expect(getByText(/sample main content/i)).toBeInTheDocument();
});
