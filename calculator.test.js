import calculator from "./calculator.js";

describe("Calculator functions", () => {
  test("Add function", () => {
    expect(calculator.add(2, 2)).toEqual(4);
  });

  test("Subtract function", () => {
    expect(calculator.subtract(2, 2)).toEqual(0);
  });

  test("Divide function", () => {
    expect(calculator.divide(2, 2)).toEqual(1);
  });

  test("Multiply function", () => {
    expect(calculator.multiply(2, 2)).toEqual(4);
  });
});
