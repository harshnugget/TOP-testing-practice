import analyzeArray from "./analyzeArray.js";

describe("Analyze array", () => {
  let result1;
  let result2;

  beforeAll(() => {
    result1 = analyzeArray([1, 2, 3]);
    result2 = analyzeArray([3, 6, 1, 8, 10, 15]);
  });

  test("Return the minimum number", () => {
    expect(result1.min).toEqual(1);
    expect(result2.min).toEqual(1);
  });

  test("Return the maximum number", () => {
    expect(result1.max).toEqual(3);
    expect(result2.max).toEqual(15);
  });

  test("Return the average", () => {
    expect(result1.average).toBeCloseTo(2, 2);
    expect(result2.average).toBeCloseTo(7.17, 2);
  });

  test("Return the length of the array", () => {
    expect(result1.length).toEqual(3);
    expect(result2.length).toEqual(6);
  });
});
