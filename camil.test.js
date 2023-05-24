const {
  sum,
  isNull,
  addProperty,
  isEven,
  isPrime,
  reverseArray,
  removeLastChar,
  merge,
  testStatement,
  getLocalCurrency,
} = require("./index");

const { addComment, updateComment, deleteComment } = require("./camil.comment");

describe("sum function", () => {
  it("should return sum of the two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("should throw error if the parameters are not numbers", () => {
    expect(() => sum(3, true)).toThrow("Typeof parameters must be number type");
    expect(() => sum(3, [])).toThrow("Typeof parameters must be number type");
  });
});

describe("isNull function", () => {
  it("should return true when value is null", () => {
    const result = isNull(null);
    expect(result).toBeTruthy();
  });
  it("should return false when value is not null", () => {
    const result = isNull(5);
    expect(result).toBeFalsy();
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
  it("should return  error when type of parameter is not number", () => {
    expect(() => isEven("a")).toThrow("Typeof passed value is not number!");
  });
  it("should return true when the number is even", () => {
    expect(isEven(2)).toBeTruthy();
  });
  it("should return false when the number is odd", () => {
    expect(isEven(3)).toBeFalsy();
  });
});

describe("isPrime function", () => {
  it("should return  error when type of parameter is not number", () => {
    expect(() => isPrime("a")).toThrow("Typeof passed value is not number!");
    expect(() => isPrime(false)).toThrow("Typeof passed value is not number!");
  });
  it("should return false when the value is less than 1", () => {
    expect(isPrime(-3)).toBeFalsy();
  });

  it("should return false when the number is odd", () => {
    expect(isPrime(7)).toBeTruthy();
  });
});

describe("reverseArray function", () => {
  it("should reverse the elements in the array", () => {
    const reversedArr = reverseArray([1, 2, 3, 4, 5]);
    expect(reversedArr).toEqual([5, 4, 3, 2, 1]);
  });

  it("should return an empty array if the input array is empty", () => {
    const reversedArr = reverseArray([]);
    expect(reversedArr).toEqual([]);
  });

  it("should return the same array if it contains only one element", () => {
    const reversedArr = reverseArray([32]);
    expect(reversedArr).toEqual([32]);
  });
});
describe("merge function", () => {
  it("should throw error if any of the elements is null", () => {
    expect(() => merge(null, [])).toThrow("Cant merge nullable value!");
  });
  it("should throw error if any of the elements is not in object type", () => {
    expect(() => merge(1, {})).toThrow("Arguments must be object or array!");
  });
  it("should merge if first element is an array", () => {
    expect(merge([1, 2, 3], { a: 4 })).toEqual([1, 2, 3, { a: 4 }]);
  });
  it("should merge if both elements are object", () => {
    expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
});

describe("removeLastChar function", () => {
  it("should return  error when type of parameter is not string", () => {
    expect(() => removeLastChar(9)).toThrow("Typeof argument must be string!");
  });
  it("should remove the last character from a string", () => {
    const result = removeLastChar("JavaScript Testings");
    expect(result).toBe("JavaScript Testing");
  });
  it("should return an empty string when the input string has only one character", () => {
    const result = removeLastChar("S");
    expect(result).toBe("");
  });
});
describe("testStatement", () => {
  it("should return Truthy if statement is true", () => {
    const statement = true;
    const result = testStatement(true, "Truthy", "Falsy");
    expect(result).toBe("Truthy");
  });

  it("should return Falsy if statement is false", () => {
    const statement = false;
    const result = testStatement(statement, "Truthy", "Falsy");
    expect(result).toBe("Falsy");
  });

  it("should throw an error if the statement is not a boolean", () => {
    const statement = "is not boolean";
    expect(() => testStatement(statement, "Truthy", "Falsy")).toThrow(
      "Type of first argument must be boolean!"
    );
  });
});

describe("getLocalCurrency function", () => {
  it("should return the local currency based on the country code", () => {
    expect(getLocalCurrency("AZ")).toBe("AZN");
    expect(getLocalCurrency("TR")).toBe("TL");
  });

  it("should return undefined for unknown country codes", () => {
    expect(getLocalCurrency("UK")).toBeUndefined();
    expect(getLocalCurrency("FR")).toBeUndefined();
    expect(getLocalCurrency("ES")).toBeUndefined();
  });
});
describe.only(
  "Testing Asynchronous Code (dummyjson API)",
  () => {
    const date = new Date();
    const defaultId = 1;
    let currentISOTime = date.toISOString();

    const newComment = {
      body: "Learn JEST as advanced",
      postId: 3,
      userId: 5,
    };

    const updatedBody = {
      body: "Be carefull with mocking",
    };

    const expectedResult = {
      id: 341,
      body: "Learn JEST as advanced",
      postId: 3,
      user: {
        id: 5,
        username: "kmeus4",
      },
    };

    const expectedUpdatedResult = {
      id: 1,
      body: "Be carefull with mocking",
      postId: 100,
      user: {
        id: 63,
        username: "eburras1q",
      },
    };

    const expectedDeletedResult = {
      id: 1,
      body: "This is some awesome thinking!",
      postId: 100,
      user: {
        id: 63,
        username: "eburras1q",
      },
      isDeleted: true,
      deletedOn: currentISOTime,
    };
    it("should add a new comment", async () => {
      const firstData = await addComment(newComment);
      expect(firstData).toEqual(expectedResult);
    });

    it("should update the comment", async () => {
      const updatedData = await updateComment(defaultId, updatedBody);
      expect(updatedData).toEqual(expectedUpdatedResult);
    });

    it("should delete the comment", async () => {
      let deletedData = await deleteComment(defaultId);
      deletedData["deletedOn"] = currentISOTime;
      expect(deletedData).toEqual(expectedDeletedResult);
    });
  });