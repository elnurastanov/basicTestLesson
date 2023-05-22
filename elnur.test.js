const { sum, isNull, addProperty } = require("./index");

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