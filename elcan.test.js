const { sum, isNull, addProperty, isEven, isPrime, reverseArray, removeLastChar, testStatement, getLocalCurrency, merge } = require("./index")

// sum 

describe("sum function", () => {

    it("this function should solve the sum of two numbers", () => {
        expect(sum(3, 4)).toBe(7)
    })

    it("The must-sum function throws a error if the argument types are not numbers throw error", () => {
        expect(() => sum("A", 2)).toThrow()
    })
})

// isNull

describe("isNull function", () => {

    it("should value be true", () => {
        expect(isNull(null)).toBeTruthy()
    })
    it("should value be false", () => {
        expect(isNull("flkjdh")).toBeFalsy()
    })

})

// addProperty

describe("addProperty function", () => {
    let dummyObject;
    beforeEach(() => { dummyObject = { a: "1" } })
    it("should return object", () => {
        expect(addProperty(dummyObject, "b")).toEqual({ a: "1", b: null })
    })
    it("should throw error", () => {
        expect(() => addProperty(dummyObject, "a")).toThrow()
    })
})

// isEven

describe("isEven function", () => {

    it("this function must return true", () => {
        expect(isEven(2)).toBeTruthy()
    })

    it("this function must return false", () => {
        expect(isEven(1)).toBeFalsy()
    })
    it("this function must return error", () => {
        expect(() => isEven("slds")).toThrow("Typeof passed value is not number!")
    })

})


// isPrime 
describe("isPrime", () => {

    it("this function must return true", () => {
        expect(isPrime(5)).toBeTruthy()
        expect(isPrime(7)).toBeTruthy()
    })
    it("this function must return false", () => {
        expect(isPrime(9)).toBeFalsy()
        expect(isPrime(14)).toBeFalsy()
    })
    it("this function must throw error", () => {
        expect(() => isPrime("dfd")).toThrow()
        expect(() => isPrime(null)).toThrow()
        expect(() => isPrime(undefined)).toThrow()
    })

})


// reverseArray

describe("reverseArray function", () => {

    it("this function must return error", () => {
        expect(() => reverseArray("dkfojdsfk").toThrow())
    })

    it("this function must return true", () => {
        const array = [1, 4, 6, 7]
        const reverseArr = structuredClone(array).reverse()
        expect(reverseArray(array)).toEqual(reverseArr)
    })
})

// merge 

describe("merge function", () => {

    it("each argument must be of type object ", () => {
        expect(() => merge([2, 34, 4], 2)).toThrow("Arguments must be object or array!")
    })
    it('should return object', () => {
        expect(merge({ b: "2" }, { a: "1" })).toEqual({ b: "2", a: "1" })
    })
    it('should return array', () => {
        expect(merge(["4", "3"], ["2", "1"])).toEqual(["4", "3", ["2", "1"]])
    })

})

// removeLastChar

describe("removeLastChar", () => {

    it("should return a string, but the last character is removed", () => {
        expect(removeLastChar("slice")).toEqual("slic")
    })
    it("should throw error", () => {
        expect(() => removeLastChar(2)).toThrow("Typeof argument must be string!")
    })
})


// testStatement

describe("testStatement function", () => {

    it("should return true", () => {
        expect(testStatement(true, 5, 10)).toEqual(5)
    })
    it("should return false", () => {
        expect(testStatement(false, 5, 10)).toEqual(10)
    })
    it("should throw error", () => {
        expect(() => testStatement(3, 3, 10)).toThrow("Type of first argument must be boolean!")
    })

})

// getLocalCurrency

describe("getLocalCurrency function", () => {

    const obj = {
        AZ: "AZN",
        TR: "TL",
        US: "US",
        PL: "ZL",
        GE: "EU",
    }

    it("should return true currency", () => {
        let arg = "AZ"
        expect(getLocalCurrency(arg)).toEqual(obj[arg])
        arg = "dlfkdsljfags"
        expect(getLocalCurrency(arg)).toBeUndefined()
    })

})