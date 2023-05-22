const {
  isEven,
  isPrime,
  reverseArray,
  merge,
  removeLastChar,
  testStatement,
  getLocalCurrency,
} = require("./index");

describe("isEven function", () => {
  it("should throw error in different argument type", () => {
    expect(() => isEven("4")).toThrow("Typeof passed value is not number!");
  });

  it("should be result true", () => {
    expect(isEven(4)).toBeTruthy();
  });

  it("should be result false", () => {
    expect(isEven(7)).toBeFalsy();
  });
});

describe("isPrime function", () => {
  it("should throw error in different argument type", () => {
    expect(() => isPrime("7")).toThrow("Typeof passed value is not number!");
  });

  it("should be result true", () => {
    expect(isPrime(29)).toBeTruthy();
  });

  it("should be result false", () => {
    expect(isPrime(18)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(-2)).toBeFalsy();
  });
});

describe("reverseArray function", () => {
  it("shoul reverse the array, ex: ([3,5,8] => [8,5,3]) ", () => {
    expect(reverseArray([3, 5, 8])).toEqual([8, 5, 3]);
  });
});

describe("merge function", () => {
  it("should throw error the case of the argument type is null", () => {
    expect(() => merge(null, { firstName: "farid" })).toThrow(
      "Cant merge nullable value!"
    );
  });

  it("should throw error the case of the argument type is null", () => {
    expect(() => merge({ firstName: "wolter" }, null)).toThrow(
      "Cant merge nullable value!"
    );
  });

  it("should throw error in different argument type", () => {
    expect(() => merge({ firstName: "wolter" }, "white")).toThrow(
      "Arguments must be object or array!"
    );
    expect(() => merge("white", { firstName: "wolter" })).toThrow(
      "Arguments must be object or array!"
    );
  });

  it("should merge two separate typeof object into one array the case of the first argument is array", () => {
    expect(merge([2, 4], { firstName: "wolter" })).toEqual([
      2,
      4,
      { firstName: "wolter" },
    ]);
  });

  it("should merge two  separate typeof object into one object the case of the first argument is NOT array ", () => {
    expect(merge({ firstName: "wolter" }, [3, 4])).toEqual({
      "0": 3,
      "1": 4,
      firstName: "wolter",
    });
  });
});

describe("removeLastChar function", () => {
  it("should throw error in different argument type", () => {
    expect(() => removeLastChar(7)).toThrow("Typeof argument must be string!");
  });

  it("should remove last char from string", () => {
    expect(removeLastChar("Wolter")).toBe("Wolte");
  });
});

describe("testStatement function", () => {
  it("should throw error first argument in different argument type", () => {
    expect(() => testStatement(10, "wolter", "white")).toThrow(
      "Type of first argument must be boolean!"
    );
  });

  it("should return truthyValue argument the case of the statement is true", () => {
    expect(testStatement(true, "Wolter", "Gustavo"));
  });

  it("should return falsyValue argument the case of the statement is false", () => {
    expect(testStatement(false, "Wolter", "Gustavo"));
  });
});

describe("getLocalCurrency function", () => {
  it("should return undefined the case of the don't find currency", () => {
    expect(getLocalCurrency("BR")).toBeUndefined();
  });

  it("should return contry currency the case of the argument ", () => {
    expect(getLocalCurrency("PL")).toBe("ZL");
  });
});
