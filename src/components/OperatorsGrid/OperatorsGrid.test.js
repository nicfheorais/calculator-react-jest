import OperatorsGrid from "./OperatorsGrid";

import {render, screen} from "@testing-library/react";

describe("all five operator buttons display", () => {
    const operatorButtons = ["+", "-", "*", "/", "="];
    test.each(operatorButtons)(
        "renders each of the five opertor buttons",
        (operator) => {
            render(<OperatorsGrid />);
            const button = screen.getByText(operator);
            expect(button).toBeInTheDocument();
        }
    );
});
