import { print } from "./print";

test("prints text to console", () => {
  const text = "some text";
  const consoleSpy = jest.spyOn(console, "log");
  print(text);
  expect(consoleSpy).toHaveBeenCalledWith(text);
});

test("prints default text if no text given", () => {
  const consoleSpy = jest.spyOn(console, "log");
  print("");
  expect(consoleSpy).toHaveBeenCalledWith("default text");
});
