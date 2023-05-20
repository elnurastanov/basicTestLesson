const {
  sum,
  isNull,
  addProperty,
  isEven,
  isPrime,
  reverseArray,
  merge,
  removeLastChar,
  testStatement,
  getLocalCurrency,
} = require("./index");

describe("sum function", () => {
  it("should result be 3 of 1 and 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should throw error in different argument type", () => {
    expect(() => sum("1", 2)).toThrow("Typeof parameters must be number type");
  });
});

describe("isNull function", () => {
  it("should be result true", () => {
    expect(isNull(null)).toBeTruthy();
  });

  it("should be result false", () => {
    expect(isNull(9)).toBeFalsy();
  });
});

describe("addProperty function", () => {
  it("should added key's value be null and not throw error", () => {
    const dummyObj = { a: 1 };
    expect(addProperty(dummyObj, "b")).toEqual({ a: 1, b: null });
    expect(() => addProperty(dummyObj, "b")).not.toThrow();
  });

  it("should be throw error in duplicated key", () => {
    const dummyObj = { a: 1 };
    expect(() => addProperty(dummyObj, "a")).toThrow(
      "Couldn't add dublicated property!"
    );
  });
});

describe("isEven function", () => {
  it("should be result truthy", () => {
    expect(isEven(10)).toBeTruthy();
  });
  it("should be result falsy", () => {
    expect(isEven(9)).toBeFalsy();
  });
  it("should throw error for NaN value", () => {
    expect(() => isEven("5")).toThrow("Typeof passed value is not number!");
  });
});

describe("isPrime function", () => {
  it("should throw error for NaN value", () => {
    expect(() => isPrime("5")).toThrow("Typeof passed value is not number!");
  });
  it("should return false if value is equal to or less than 1", () => {
    expect(isPrime(1)).toBeFalsy();
  });
  it("should return false for not prime number", () => {
    expect(isPrime(4)).toBeFalsy();
  });
  it("should return true for prime number", () => {
    expect(isPrime(5)).toBeTruthy();
  });
});

describe("reverseArray function", () => {
  it("should return the reverse of the array", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });
});

describe("merge function", () => {
  it("should throw error if any of the elements is null", () => {
    expect(() => merge(null, [])).toThrow("Cant merge nullable value!");
  });
  it("should throw error if any of the elements is not in object type", () => {
    expect(() => merge(1, {})).toThrow("Arguments must be object or array!");
  });
  it("should merge if first element is an array", () => {
    expect(merge([1, 2, 3], { a: 4 })).toEqual([1, 2, 3, { a: 4 }]);
  });
  it("should merge if both elements are object", () => {
    expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
});

describe("removeLastChar function", () => {
  it("should throw error if value is not a string", () => {
    expect(() => removeLastChar(5)).toThrow("Typeof argument must be string!");
  });
  it("should remove last char of a string", () => {
    expect(removeLastChar("text")).toBe("tex");
  });
});

describe("testStatement function", () => {
  it("should throw error if statement is not a boolean", () => {
    expect(() => testStatement("text")).toThrow(
      "Type of first argument must be boolean!"
    );
  });
  it("should return truthy value for true statement", () => {
    expect(testStatement(5 > 3, true, false)).toBeTruthy();
  });
  it("should return falsy value for false statement", () => {
    expect(testStatement(5 < 3, true, false)).toBeFalsy();
  });
});

describe("getLocalCurrency function", () => {
  it("should return correct currency based on country code", () => {
    expect(getLocalCurrency("AZ")).toBe("AZN");
    expect(getLocalCurrency("TR")).toBe("TL");
    expect(getLocalCurrency("US")).toBe("US");
    expect(getLocalCurrency("PL")).toBe("ZL");
    expect(getLocalCurrency("GE")).toBe("EU");
  });
});
