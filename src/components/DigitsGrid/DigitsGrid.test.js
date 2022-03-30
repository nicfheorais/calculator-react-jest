import DigitsGrid from "./DigitsGrid";

import { render, screen } from "@testing-library/react";

describe("all ten digit buttons display", () => {
  const digitButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  test.each(digitButtons)("renders all ten digit buttons", (digit) => {
    render(<DigitsGrid />);
      const button = screen.getByText(digit);
         expect(button).toBeInTheDocument();
  });
});
