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
  it("should added number be even", () => {
    expect(isEven(26)).toBeTruthy();
  });
  it("should added number be even", () => {
    expect(isEven(25)).toBeFalsy();
  });

  it("should value be number type", () => {
    expect(() => isEven("cdsdv").toThrow());
  });
});

describe("isPrime function", () => {
  it("should value be number type", () => {
    expect(() => isPrime("dsdsd").toThrow());
  });

  it("should not number be less than 1", () => {
    expect(isPrime(-9)).toBeFalsy();
  });

  it("should number not diveded to digit", () => {
    expect(isPrime(9)).toBeFalsy();
  });

  it("should be return true", () => {
    expect(isPrime(13)).toBeTruthy();
  });
});

describe("reverseArray function", () => {
  it("", () => {
    expect(reverseArray([1, 2, 5, 7])).toEqual([7, 5, 2, 1]);
  });
});

describe("removeLastChar function", () => {
  it("should throw an error if called without a string", () => {
    expect(() => removeLastChar(30)).toThrow("Typeof argument must be string!");
  });

  it("should remove last char", () => {
    expect(removeLastChar("programmer")).toBe("programme");
  });
});

describe("testStatement function", () => {
  it("first argument should be boolean", () => {
    expect(() => testStatement(25)).toThrow(
      "Type of first argument must be boolean!"
    );
  });

  it("should be true", () => {
    expect(testStatement(true, "1", "")).toBeTruthy();
  });

  it("should be false", () => {
    expect(testStatement(false, "1", "")).toBeFalsy();
  });
});

describe("merge function", () => {
  it("should elements be null", () => {
    expect(() => merge(null, null)).toThrow("Cant merge nullable value!");
  });

  it("should arguments be object types", () => {
    expect(() => merge("dsdsd", 69)).toThrow(
      "Arguments must be object or array!"
    );
  });

  // it("should arguments be the same types", () => {
  //   expect(() => merge(15, 9)).toThrow("Arguments must be same type!");
  // });

  it("should the first argument be array", () => {
    expect(merge([1, 3, 5], { a: 1 })).toStrictEqual([1, 3, 5, { a: 1 }]);
  });

  it("should be merged elements", () => {
    expect(merge({ a: 1 }, [1, 3, 5])).toStrictEqual({
      0: 1,
      1: 3,
      2: 5,
      a: 1,
    });
  });
});

describe("getLocalCurrency", () => {
  it("if argument does not match with a key of object", () => {
    expect(getLocalCurrency(true)).toBeUndefined();
  });

  it("should argument matches with a key", () => {
    expect(getLocalCurrency("TR")).toBe("TL");
  });
});
