const { sum,
    isNull,
    addProperty,
    isEven,
    isPrime,
    reverseArray,
    merge,
    removeLastChar,
    testStatement,
    getLocalCurrency
} = require('./index');

describe('sum and arguments check number', () => {
    it('check a+b', () => {
        expect(sum(1, 3)).toBe(4)
    });
    it("check arguments number", () => {
        expect(() => sum("1", 3)).toThrow("Typeof parameters must be number type")
    })
});

describe("isNull function", () => {
    it("checks arguments null", () => {
        expect(isNull(null)).toBeTruthy();
    })
    it("checks arguments not null", () => {
        expect(isNull(1)).toBeFalsy();
    })
});

describe('addProperty function', () => {
    it("should property is not null", () => {
        const mockObj = { a: 'salam' };
        expect(() => addProperty(mockObj, 'a')).toThrow("Couldn't add duplicated property!")
    })
    it("should property is null", () => {
        const mockObj = { a: 'salam', b: null };
        expect(() => addProperty(mockObj, "b")).not.toThrow()
    })
});

describe('isEven function', () => {
    it("check argument typeof number", () => {
        expect(() => isEven("1999")).toThrow("Typeof passed value is not number!")
    });
    it("check argument even", () => {
        expect(isEven(6)).toBeTruthy()
    });
    it("check argument odd", () => {
        expect(isEven(7)).toBeFalsy()
    })
});

describe('isPrime function', () => {
    it("check argument typeof number", () => {
        expect(() => isPrime("1999")).toThrow("Typeof passed value is not number!")
    })
    it("check argument 1", () => {
        expect(isPrime(1)).toBeFalsy()
    })
    it("check argument is not prime", () => {
        expect(isPrime(8)).toBeFalsy()
    })
    it("check argument is prime", () => {
        expect(isPrime(7)).toBeTruthy()
    })
});

describe('reverseArray function', () => {
    it("reverse array", () => {
        expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1])
    })
    it("check argument isArray", () => {
        expect(() => reverseArray('string')).toThrow("array.reverse is not a function")
    })
});

describe('merge function', () => {
    it("check argument is null", () => {
        expect(() => merge(null, 5)).toThrow("Cant merge nullable value!")
    })
    it("check argument is object", () => {
        expect(() => merge(5, [1, 2, 3])).toThrow("Arguments must be object or array!")
    })

    it("check argument is array", () => {
        expect(merge([1, 2, 3], { a: 1999 })).toEqual([1, 2, 3, { a: 1999 }])
    })
    it("arguments merge", () => {
        expect(merge([1, 2, 3, 4], [5, 6])).toEqual([1, 2, 3, 4, [5, 6]])
    })
    it("arguments object", () => {
        const student = { id: 1, name: 'miri', spec: 'student' };
        const teacher = { id: 2, name: 'Elnur', spec: 'teacher' };
        expect(merge(student, teacher)).toEqual(teacher)
    })
});

describe('removeLastChar function', () => {
    it("check argument is not string", () => {
        expect(() => removeLastChar(1999)).toThrow("Typeof argument must be string!")
    })
    it("removeLastChar of string", () => {
        expect(removeLastChar("I am Pörfekt Developer")).toBe('I am Pörfekt Develope')
    })
});

describe('testStatement function', () => {
    it("check first arg is not boolean", () => {
        expect(() => testStatement(1999)).toThrow("Type of first argument must be boolean!")
    })
    it("statement is true", () => {
        expect(testStatement(true, 24, 1999)).toEqual(24)
    })
    it("statement is false", () => {
        expect(testStatement(false, 24, 1999)).toEqual(1999)
    })
});

describe('getLocalCurrency function', () => {
    it("getLocalCurrency", () => {
        expect(getLocalCurrency("AZ")).toEqual("AZN")
    })
    it("is not Currency", () => {
        expect(getLocalCurrency("RU")).toEqual(undefined)
    })
});
