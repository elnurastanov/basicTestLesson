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
  it("should result in 3 for 1 and 2", () => {
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

describe('isEven function', () => {
  it('should be true', () => {
    expect(isEven(4)).toBeTruthy()
  });

  it('should be false', () => {
    expect(isEven(3)).toBeFalsy()
  });

  it("should throw error for non number values", () => {
    expect(() => isEven("a")).toThrow("Typeof passed value is not number!");
  });
});

describe('isPrime function', () => {
  it('should be false', () => {
    expect(isPrime(1)).toBeFalsy()
  });

  it('should be true', () => {
    expect(isPrime(2)).toBeTruthy()
  });

  it("should throw error for non number values", () => {
    expect(() => isPrime("a")).toThrow("Typeof passed value is not number!");
  });
});

describe('reverseArray function', () => {
  it('should return reversed array', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1])
  })
})

describe('merge function', () => {
  it('should return merged object', () => {
    expect(merge({ a: 1 }, { b: 2, c: 3 })).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should return merged array', () => {
    expect(merge([1], [2, 3])).toEqual([1, [2, 3]])
  })

  it('should receive object types', () => {
    expect(() => merge({ a: 1 }, 1)).toThrow("Arguments must be object or array!")
  })
})

describe('removeLastChar function', () => {
  it('should remove the last char', () => {
    expect(removeLastChar('orange')).toBe('orang')
  })

  it('should receive string', () => {
    expect(() => removeLastChar(1)).toThrow('Typeof argument must be string!')
  })
})

describe('test statement function', () => {
  it('should return true', () => {
    expect(testStatement((5 < 6), 5, 0)).toBe(5)
  });

  it('should return false', () => {
    expect(testStatement((5 > 6), 5, 0)).toBe(0)
  });

  it('should be boolean', () => {
    expect(() => testStatement('test')).toThrow("Type of first argument must be boolean!")
  })
})

describe('getLocationCurreny function', () => {
  it('should return currency of country code', () => {
    expect(getLocalCurrency('AZ')).toBe('AZN')
  })
})