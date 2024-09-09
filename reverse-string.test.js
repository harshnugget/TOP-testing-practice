import reverseString from "./reverse-string.js";

test("Reverse a string", () => {
  expect(reverseString("Hello world!")).toBe("!dlrow olleH");
  expect(reverseString("123456789")).toBe("987654321");
});
