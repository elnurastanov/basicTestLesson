const {
  isEven,
  isPrime,
  reverseArray,
  removeLastChar,
  getLocalCurrency,
  testStatement,
  merge,
} = require("./index");

describe("isEven function", () => {
  it("should result be even number", () => {
    expect(isEven(4)).toBeTruthy();
  });

  it("should throw error in different argument type", () => {
    expect(() => isEven("2")).toThrow("Typeof passed value is not number!");
  });
});

describe("isPrime function", () => {
  it("should result be prime number", () => {
    expect(isPrime(8)).toBeFalsy();
  });
  it("should result be greater or equal than one", () => {
    expect(isPrime(0.5)).toBeFalsy();
  });

  it("should throw error in different argument type", () => {
    expect(() => isPrime("4")).toThrow("Typeof passed value is not number!");
  });
  it("should return true", () => {
    expect(isPrime(7)).toBeTruthy();
  });
});

describe("reverseArray function", () => {
  it("should reverse an array", () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });
});

describe("merge function", () => {
  it("should throw error in different argument type", () => {
    expect(() => merge("hello", [4, 1, 2, 8])).toThrow(
      "Arguments must be object or array!"
    );
  });

  it("should throw error in null argument type", () => {
    expect(() => merge(null, [4, 1, 2, 8])).toThrow(
      "Cant merge nullable value!"
    );
  });

  it("should throw error if element types different", () => {
    expect(() => merge(123, "hi")).toThrow(
      "Arguments must be object or array!"
    );
  });

  it("should combine arrays by appending element2", () => {
    expect(merge([2, 4, 5], [8])).toEqual([2, 4, 5, [8]]);
  });

  it("should spread both elements", () => {
    expect(merge({ 0: 2, 1: 4, 2: 5 }, { 3: 3, 4: 6, 5: 7 })).toEqual({
      0: 2,
      1: 4,
      2: 5,
      3: 3,
      4: 6,
      5: 7,
    });
  });
});

describe("removeLastChar function", () => {
  it("should throw error in different argument type ", () => {
    expect(() => removeLastChar(45)).toThrow("Typeof argument must be string!");
  });

  it("should remove last index element", () => {
    expect(removeLastChar("feramiz")).toEqual("ferami");
  });
});

describe("getLocalCurrency function", () => {
  it("should return local currency", () => {
    expect(getLocalCurrency("AZ")).toEqual("AZN");
  });
});

describe("testStatement function", () => {
  it("should return the truthyValue if statement is true", () => {
    const result = testStatement(true, "truthy", "falsy");
    expect(result).toBe("truthy");
  });

  it("should return the falsyValue if statement is false", () => {
    const result = testStatement(false, "truthy", "falsy");
    expect(result).toBe("falsy");
  });

  it("should throw an error if statement is not a boolean", () => {
    expect(() => {
      testStatement("not a boolean", "truthy", "falsy");
    }).toThrowError("Type of first argument must be boolean!");
  });
});
