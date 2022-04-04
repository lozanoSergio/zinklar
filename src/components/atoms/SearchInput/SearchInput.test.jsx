import { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import { SearchInput } from "./SearchInput";

describe("Checks SearchInput component", () => {
  let component;
  const onChange = jest.fn();

  const MockSearchInput = () => {
    const [value, setValue] = useState("");

    return (
      <SearchInput
        value={value}
        onChange={(e) => {
          const val = e.target.value;
          onChange(val);
          setValue(val);
        }}
        placeholder="placeholder test text"
      />
    );
  };

  beforeEach(() => {
    component = render(<MockSearchInput />);
  });

  it("renders component", () => {
    component.getByPlaceholderText("placeholder test text");
  });

  it("changes value", () => {
    const input = component.getByPlaceholderText("placeholder test text");

    fireEvent.change(input, { target: { value: "new value text" } });
    expect(onChange).toHaveBeenCalled();
  });
});
