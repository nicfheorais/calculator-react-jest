import Operator from "./Operator";

import {render, screen} from "@testing-library/react";

describe("the operator buttons display", () => {
    const operatorButtons = ["+", "-", "*", "/", "="];

    test.each(operatorButtons)("renders operator button %s", (operator) => {
        render(<Operator operator={operator} />);
        const button = screen.getByText(operator);
        expect(button).toBeInTheDocument();
    });
});
