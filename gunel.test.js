const {
    isEven,
    isPrime,
    reverseArray,
    merge,
    removeLastChar,
    testStatement,
    getLocalCurrency
} = require("./index");


describe("isEven function", () => {
    it("should return true for even numbers", () => {
        expect(isEven(2)).toBeTruthy();
    });

    it("should return false for odd numbers", () => {
        expect(isEven(1)).toBeFalsy();
    });

    it("should throw an error for non-numeric argument", () => {
        expect(() => isEven(null)).toThrow("Typeof passed value is not number!");
        expect(() => isEven("2")).toThrow("Typeof passed value is not number!");
        expect(() => isEven(undefined)).toThrow("Typeof passed value is not number!");
        expect(() => isEven({})).toThrow("Typeof passed value is not number!");
    });
});

describe("isPrime function", () => {
    it("should return true for prime numbers", () => {
        expect(isPrime(2)).toBeTruthy();
    })
    it("should return false for non-prime numbers", () => {
        expect(isPrime(4)).toBeFalsy();
    })
    it("should throw an error for non-numeric argument", () => {
        expect(() => isEven(null)).toThrow("Typeof passed value is not number!");
        expect(() => isEven("2")).toThrow("Typeof passed value is not number!");
        expect(() => isEven(undefined)).toThrow("Typeof passed value is not number!");
        expect(() => isEven({})).toThrow("Typeof passed value is not number!");
    });
})

describe("reverseArray function", () => {
    it("should reverse the elements of the array", () => {
        expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    });

    it("should return the same array if it contains only one element", () => {
        expect(reverseArray([42])).toEqual([42]);
    });

    it("should return an empty array if it is empty", () => {
        expect(reverseArray([])).toEqual([]);
    })
});


describe("merge function", () => {
    it("should throw error in different argument type", () => {
        expect(() => merge("salam", [4, 1, 2, 8])).toThrow(
            "Arguments must be object or array!"
        );
    });

    it("should throw error in null argument type", () => {
        expect(() => merge(null, [4, 1, 2, 8])).toThrow(
            "Cant merge nullable value!"
        );
    });

    it("should throw error if element types different", () => {
        expect(() => merge(123, "gunel")).toThrow(
            "Arguments must be object or array!"
        );
    });

    it("should combine arrays by appending element2", () => {
        expect(merge([2, 4, 5], [8])).toEqual([2, 4, 5, [8]]);
    });
    it("should merge two objects correctly", () => {
        const result = merge({ 0: 2, 1: 4, 2: 5 }, { 2: 3, 3: 6, 4: 7 });
        expect(result).toEqual({
            0: 2,
            1: 4,
            2: 3,
            3: 6,
            4: 7,
        });
    });    
});

describe("removeLastChar function", () => {
    it("should remove the last character from a string", () => {
        const value = "Hello World";
        const result = removeLastChar(value);
        expect(result).toEqual("Hello Worl");
    });

    it("should remove the last character from an empty string", () => {
        const value = "";
        const result = removeLastChar(value);
        expect(result).toEqual("");
    });

    it("should throw an error when the argument is not a string", () => {
        expect(() => removeLastChar(12)).toThrow("Typeof argument must be string!");
        expect(() => removeLastChar({})).toThrow("Typeof argument must be string!");
        expect(() => removeLastChar([])).toThrow("Typeof argument must be string!");
        expect(() => removeLastChar(123)).toThrow("Typeof argument must be string!");
        expect(() => removeLastChar(undefined)).toThrow("Typeof argument must be string!");
    });
});

describe("testStatement function", () => {
    it("should return the truthy value when the statement is true", () => {
      const statement = true;
      const truthyValue = "Truthy";
      const falsyValue = "Falsy";
  
      const result = testStatement(statement, truthyValue, falsyValue);
  
      expect(result).toEqual(truthyValue);
    });
  
    it("should return the falsy value when the statement is false", () => {
      const statement = false;
      const truthyValue = "Truthy";
      const falsyValue = "Falsy";
  
      const result = testStatement(statement, truthyValue, falsyValue);
  
      expect(result).toEqual(falsyValue);
    });
  
    it("should throw an error when the first argument is not a boolean", () => {
      const statement = "not boolean";
      const truthyValue = "Truthy";
      const falsyValue = "Falsy";
  
      expect(() => testStatement(statement, truthyValue, falsyValue)).toThrow(
        "Type of first argument must be boolean!"
      );
    });
});

describe("getLocalCurrency function", () => {
    it("should return the local currency for a valid country code", () => {
      const countryCode = "TR";
      const result = getLocalCurrency(countryCode);
      expect(result).toEqual("TL");
    });
  
    it("should return undefined for an invalid country code", () => {
      const countryCode = "XYZ";
      const result = getLocalCurrency(countryCode);
      expect(result).toBeUndefined();
    });
  });
  
  

