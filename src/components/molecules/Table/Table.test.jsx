import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { Table } from "./Table";

describe("Checks Table component", () => {
  let component;

  const tableData = {
    headers: ["id", "file name", "count"],
    rowsData: [
      { id: 1, name: "data1", count: 3 },
      { id: 2, name: "data2", count: 4 },
    ],
  };

  beforeEach(() => {
    component = render(<Table tableData={tableData} />);
  });

  it("renders component", () => {
    component.getByText("data1");
  });

  it("renders with empty row data without crash", () => {
    tableData.rowsData = [];
    component.rerender(<Table tableData={tableData} />);
    const table = component.getByRole("data-table");
    expect(table).toHaveTextContent("No result found");
  });
});
