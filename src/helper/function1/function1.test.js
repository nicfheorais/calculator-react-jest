import { sum } from "./function1.js";

describe("basic add test", () => {
  test("GIVEN a 1 and a 2, WHEN we pass the into Add, THEN we get back a 3", () => {
    //arrange
    const a = 1;
    const b = 2;
    const expected = 3;

    //act
    const actual = sum(a, b);
    //assert
    expect(actual).toBe(expected);
  });
});
