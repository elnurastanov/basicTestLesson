const { isEven, isPrime, reverseArray, merge, removeLastChar, testStatement, getLocalCurrency } = require("./index");

describe("isEven function", () => {
    it("should return true for even numbers", () => {
        expect(isEven(2)).toBe(true);
    });

    it("should return false for odd numbers", () => {
        expect(isEven(1)).toBe(false);
    });

    it("should throw an error when argument is not a number", () => {
        expect(() => isEven("2")).toThrow("Typeof passed value is not number!");
    })
});

describe("isPrime function", () => {
    it("should return true for prime numbers", () => {
        expect(isPrime(2)).toBe(true);
    });

    it("should return false for non-prime numbers", () => {
        expect(isPrime(1)).toBe(false);
    });

    it("should throw an error for non-number values", () => {
        expect(() => isPrime("7")).toThrow("Typeof passed value is not number!");
    });
});

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
        expect(() => merge("aytac", [1, 2, 3, 4])).toThrow(
            "Arguments must be object or array!"
        );
    });

    it("should throw error in null argument type", () => {
        expect(() => merge(null, [1, 2, 3, 4])).toThrow(
            "Cant merge nullable value!"
        );
    });

    it("should throw error if element types different", () => {
        expect(() => merge(1234, "aytac")).toThrow(
            "Arguments must be object or array!"
        );
    });

    it("should combine arrays by appending element2", () => {
        expect(merge([1, 2, 3], [4])).toEqual([1, 2, 3, [4]]);
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
        const result = removeLastChar("Aytac");
        expect(result).toBe("Ayta");
    });

    it("should throw an error when argument is not a string", () => {
        expect(() => removeLastChar(123)).toThrow("Typeof argument must be string!");
    });
});

describe("testStatement function", () => {
    it("should return the truthy value when statement is true", () => {
        const result = testStatement(true, "Truthy Value", "Falsy Value");
        expect(result).toBe("Truthy Value");
    });

    it("should return the falsy value when statement is false", () => {
        const result = testStatement(false, "Truthy Value", "Falsy Value");
        expect(result).toBe("Falsy Value");
    });

    it("should throw an error when the first argument is not a boolean", () => {
        expect(() => testStatement("true", "Truthy Value", "Falsy Value")).toThrow(
            "Type of first argument must be boolean!"
        );
    });
});

describe("getLocalCurrency function", () => {
    it("should return the local currency for the given country code", () => {
        expect(getLocalCurrency("AZ")).toBe("AZN");
        expect(getLocalCurrency("TR")).toBe("TL");
        expect(getLocalCurrency("US")).toBe("US");
        expect(getLocalCurrency("PL")).toBe("ZL");
        expect(getLocalCurrency("GE")).toBe("EU");
    });

    it("should return undefined for an invalid country code", () => {
        expect(getLocalCurrency("XX")).toBeUndefined();
        expect(getLocalCurrency("")).toBeUndefined();
        expect(getLocalCurrency(null)).toBeUndefined();
        expect(getLocalCurrency(undefined)).toBeUndefined();
    });
});
