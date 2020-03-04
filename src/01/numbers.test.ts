import { isThisNumberEven, isThisNumberPositive } from "./numbers";

test("returns true for even numbers", () => {
  const isEven = isThisNumberEven(4);
  expect(isEven).toBe(true);
});

test("returns false for odd numbers", () => {
  const isEven = isThisNumberEven(3);
  expect(isEven).toBe(false);
});

test("returns true for positive numbers", () => {
  const isPositive = isThisNumberPositive(2);
  expect(isPositive).toBe(true);
});

test("returns true for zero", () => {
  const isPositive = isThisNumberPositive(0);
  expect(isPositive).toBe(true);
});

test("returns false for negative numbers", () => {
  const isPositive = isThisNumberPositive(-2);
  expect(isPositive).toBe(false);
});
