const {
  addProperty,
  getLocalCurrency,
  isEven,
  isNull,
  isPrime,
  merge,
  removeLastChar,
  reverseArray,
  sum,
  testStatement,
} = require("../index");

// describe("addProperty", () => {
//   it('should add a property "b" with value null', () => {
//     const data = { a: "test" };
//     expect(addProperty(data, "b")).toEqual({ a: "test", b: null });
//   });

//   it('should add a property twice and will error', () => {
//     const data = { a: "test" };
//     addProperty(data, "b");
//     addProperty(data, "b");
//     expect(() => addProperty(data, "b")).toThrow();
//   })
// });

describe("getLocalCurrency", () => {
  it("should return local currency", () => {
    expect(getLocalCurrency("AZ")).toEqual("AZN");
  });

  it("should return undefined for currency not on the list", () => {
    expect(getLocalCurrency("STARBUCKS")).toEqual(undefined);
  });
});

describe("isEven", () => {
  it("it returns something truthy", () => {
    expect(isEven(2)).toBeTruthy();
  });

  it("it returns something falsy", () => {
    expect(isEven(3)).toBeFalsy();
  });

  it("Error will happen for non number var", () => {
    expect(() => isEven("test")).toThrow();
  });
});

describe("isNull", () => {
  it("it returns something truthy", () => {
    expect(isNull(null)).toBeTruthy();
  });

  it("it returns something falsy", () => {
    expect(isNull(undefined)).toBeFalsy();
  });
});

describe("isPrime", () => {
  it("it returns something truthy", () => {
    expect(isPrime(2)).toBeTruthy();
  });

  it("it returns something falsy", () => {
    expect(isPrime(4)).toBeFalsy();
  });

  it("Error will happen for non number var", () => {
    expect(() => isPrime("test")).toThrow();
  });
});

describe("merge", () => {
  it("it returns something falsy", () => {
    expect(merge([], [])).toBeTruthy();
  });

  it("Error will happen for non array", () => {
    expect(() => merge(null, null)).toThrow();
  });
});

describe("removeLastChar", () => {
  it("it returns tes", () => {
    expect(removeLastChar("test")).toEqual("tes");
  });

  it("Error will happen for non string", () => {
    expect(() => removeLastChar(null)).toThrow();
  });
});

describe("reverseArray", () => {
  it("it returns [3,2,1]", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it("Error will happen for non array", () => {
    expect(() => reverseArray(null)).toThrow();
  });
});

describe("sum", () => {
  it("it returns 6", () => {
    expect(sum(1, 2)).toEqual(3);
  });

  it("Error will happen for non number", () => {
    expect(() => sum(null, null)).toThrow();
  });
});

describe("testStatement", () => {
  it("will work and return truthy", () => {
    expect(testStatement(true, true, false)).toBeTruthy();
  });

  it("will work and return falsy", () => {
    expect(testStatement(false, true, false)).toBeFalsy();
  });

  it("will not work since the type isn't bool", () => {
    expect(() => testStatement(1, null, null)).toThrow();
  })
});
