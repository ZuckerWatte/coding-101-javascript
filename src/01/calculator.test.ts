import { sum, subtract, divide, multiply } from "./calculator";

describe("sum", () => {
  test("returns the sum of two positive values", () => {
    const isEven = sum(5, 5);
    expect(isEven).toBe(10);
  });

  test("returns the sum of two negative values", () => {
    const isEven = sum(-2, -2);
    expect(isEven).toBe(-4);
  });
});

describe("multiply", () => {
  test("returns the product of two positive values", () => {
    const isPositive = multiply(5, 5);
    expect(isPositive).toBe(25);
  });

  test("returns the product of two negative values", () => {
    const isPositive = multiply(-2, -2);
    expect(isPositive).toBe(4);
  });
});

describe("subtract", () => {
  test("returns the difference of two positive values", () => {
    const isEven = subtract(4, 2);
    expect(isEven).toBe(2);
  });

  test("returns the difference of two negative values", () => {
    const isEven = subtract(-4, -2);
    expect(isEven).toBe(-2);
  });
});

describe("divide", () => {
  test("returns the quotient of two positive values", () => {
    const isPositive = divide(4, 2);
    expect(isPositive).toBe(2);
  });

  test("returns the quotient of two negative values", () => {
    const isPositive = divide(-4, -2);
    expect(isPositive).toBe(2);
  });

  test("prints a message to the console for attempts to divide by zero", () => {
    const consoleSpy = jest.spyOn(console, "log");
    divide(8, 0);
    expect(consoleSpy).toHaveBeenCalledWith("division by zero is not allowed");
  });
});
