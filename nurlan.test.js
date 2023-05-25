const { sum, isNull, addProperty, isEven, isPrime, reverseArray, removeLastChar, testStatement, getLocalCurrency } = require("./index");

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
            "Couldn't add dublicated property!!"
        );
    });
});
describe('isEven', () => {
    it('should return true if the number is even', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(0)).toBe(true);
        expect(isEven(-4)).toBe(true);
    });

    it('should return false if the number is odd', () => {
        expect(isEven(3)).toBe(false);
        expect(isEven(-7)).toBe(false);
    });

    it('should throw an error if the value is not a number', () => {
        expect(() => isEven('not a number')).toThrow('Typeof passed value is not number!');
        expect(() => isEven(null)).toThrow('Typeof passed value is not number!');
    });
});
describe('isPrime', () => {
    it('should return true for prime numbers', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);

    });

    it('should return false for non-prime numbers', () => {
        expect(isPrime(0)).toBe(false);
        expect(isPrime(1)).toBe(false);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(6)).toBe(false);

    });

    it('should throw an error if the value is not a number', () => {
        expect(() => isPrime('not a number')).toThrow('Typeof passed value is not number!');
        expect(() => isPrime(null)).toThrow('Typeof passed value is not number!');
    });
});
describe('reverseArray', () => {
    it('should reverse the elements of the array', () => {
        expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
        expect(reverseArray(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
        expect(reverseArray([true, false])).toEqual([false, true]);
    });
});
describe('merge function', () => {
    test('merges two arrays correctly', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const expectedResult = [1, 2, 3, 4, 5, 6];
        expect(merge(arr1, arr2)).toEqual(expectedResult);
    });

    test('merges two objects correctly', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3, d: 4 };
        const expectedResult = { a: 1, b: 2, c: 3, d: 4 };
        expect(merge(obj1, obj2)).toEqual(expectedResult);
    });

    test('throws an error if either argument is null', () => {
        const obj1 = { a: 1, b: 2 };
        const nullObj = null;
        expect(() => merge(obj1, nullObj)).toThrow('Cant merge nullable value!');
    });

    test('throws an error if arguments are not objects or arrays', () => {
        const obj = { a: 1, b: 2 };
        const str = 'string';
        expect(() => merge(obj, str)).toThrow('Arguments must be object or array!');
    });

    test('throws an error if arguments are not the same type', () => {
        const arr = [1, 2, 3];
        const obj = { a: 1, b: 2 };
        expect(() => merge(arr, obj)).toThrow('Arguments must be same type!');
    });
});

describe('removeLastChar function', () => {
    test('removes the last character from a string', () => {
        const input = 'Hello';
        const expectedResult = 'Hell';
        expect(removeLastChar(input)).toEqual(expectedResult);
    });

    test('throws an error if the argument is not a string', () => {
        const input = 123;
        expect(() => removeLastChar(input)).toThrow('Typeof argument must be string!');
    });
});
describe('testStatement function', () => {
    test('returns truthyValue if statement is true', () => {
        const statement = true;
        const truthyValue = 'Truthy';
        const falsyValue = 'Falsy';
        const result = testStatement(statement, truthyValue, falsyValue);
        expect(result).toEqual(truthyValue);
    });

    test('returns falsyValue if statement is false', () => {
        const statement = false;
        const truthyValue = 'Truthy';
        const falsyValue = 'Falsy';
        const result = testStatement(statement, truthyValue, falsyValue);
        expect(result).toEqual(falsyValue);
    });

    test('throws an error if the first argument is not a boolean', () => {
        const statement = 'not boolean';
        const truthyValue = 'Truthy';
        const falsyValue = 'Falsy';
        expect(() => testStatement(statement, truthyValue, falsyValue)).toThrow('Type of first argument must be boolean!');
    });
});

describe('getLocalCurrency function', () => {
    test('returns the local currency for a valid country code', () => {
        const countryCode = 'TR';
        const expectedResult = 'TL';
        const result = getLocalCurrency(countryCode);
        expect(result).toEqual(expectedResult);
    });

    test('returns undefined for an invalid country code', () => {
        const countryCode = 'UK';
        const expectedResult = undefined;
        const result = getLocalCurrency(countryCode);
        expect(result).toEqual(expectedResult);
    });
});