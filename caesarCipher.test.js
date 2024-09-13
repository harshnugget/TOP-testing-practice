import caesarCipher from "./caesarCipher.js";

describe("Caesar cipher", () => {
  test("Test wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("Test mixed-case strings", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("HelloWorld", 13)).toBe("UryybJbeyq");
  });

  test("Test negative shifting", () => {
    expect(caesarCipher("abc", -3)).toBe("xyz");
    expect(caesarCipher("XYZ", -5)).toBe("STU");
  });
});
