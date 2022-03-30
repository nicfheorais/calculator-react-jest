import Digit from "./Digit";

import { render, screen } from "@testing-library/react";

describe("the digit buttons display", () => {
  const digitButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  test.each(digitButtons)("renders button number %i", (digit) => {
      render(<Digit digit={ digit }/>);
    const button = screen.getByText(digit);
    expect(button).toBeInTheDocument();
  });
});
