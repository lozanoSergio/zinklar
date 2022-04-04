import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { TableRow } from "./TableRow";

describe("Checks TableRow component", () => {
  let component;

  const rowData = { id: "1", name: "test", count: 3 };

  const MockTableRow = () => {
    return (
      <table>
        <tbody>
          <TableRow rowData={rowData} />
        </tbody>
      </table>
    );
  };

  beforeEach(() => {
    component = render(<MockTableRow headers={rowData} />);
  });

  it("renders component", () => {
    component.getByText("test");
  });

  it("renders with empty row data without crash", () => {
    component.rerender(<MockTableRow />);
  });
});
