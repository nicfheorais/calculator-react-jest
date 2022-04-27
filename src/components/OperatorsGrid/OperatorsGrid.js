import React from "react";
import Operator from "../Operator/Operator";

function OperatorsGrid() {
    const operatorArray = ["+", "-", "*", "/", "="];
    return (
        <>
            {operatorArray.map((element) => {
                return <Operator key={element} operator={element} />;
            })}
        </>
    );
}

export default OperatorsGrid;
