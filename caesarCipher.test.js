import caesarCipher from "./caesarCipher.js";

describe("Caesar cipher", () => {
  test("Test wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
});
