import { render } from "@testing-library/react";
import Error from "../Error";

describe("Error component", () => {
  it("renders error message correctly", () => {
    const errorMessage = "Oops! Something went wrong.";
    const { getByText } = render(<Error message={errorMessage} />);

    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(errorMessage);
    expect(errorElement.tagName).toBe("H4");
  });
});
