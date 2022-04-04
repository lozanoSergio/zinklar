/* eslint-disable react/prop-types */
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { TableHeader } from "./TableHeader";

describe("Checks TableHeader component", () => {
  let component;

  const headerNames = ["header1", "header2", "header3"];

  const MockTableHeader = ({ headers }) => {
    return (
      <table>
        <TableHeader headerNames={headers} />
      </table>
    );
  };

  beforeEach(() => {
    component = render(<MockTableHeader headers={headerNames} />);
  });

  it("renders component", () => {
    component.getByText("header1");
  });

  it("renders with empty array without crash", () => {
    component.rerender(<MockTableHeader />);
  });
});
