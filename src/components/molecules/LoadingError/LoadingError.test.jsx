import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { DEAFULT_ERROR, DEFAULT_LOADING } from "../../../constants";

import { LoadingError } from "./LoadingError";

describe("Checks LoadingError component", () => {
  let component;

  // eslint-disable-next-line react/prop-types
  const LoadingErrorMock = ({ loaded, error }) => {
    return (
      <LoadingError loaded={loaded} error={error}>
        <p>Test</p>
      </LoadingError>
    );
  };

  beforeEach(() => {
    component = render(<LoadingErrorMock loaded={false} />);
  });

  it("renders loading state", () => {
    component.getByText(DEFAULT_LOADING);
  });

  it("renders children component", () => {
    component.rerender(<LoadingErrorMock loaded={true} />);
    component.getByText("Test");
  });

  it("renders error state", () => {
    component.rerender(<LoadingErrorMock loaded={true} error={new Error()} />);

    component.getByText(DEAFULT_ERROR);
  });
});
