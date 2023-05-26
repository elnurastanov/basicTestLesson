const {
  isEven,
  isPrime,
  reverseArray,
  merge,
  removeLastChar,
  testStatement,
  getLocalCurrency,
} = require("./index");

const {
  createComment,
  updateComment,
  deleteComment,
  getCommentFromStore,
} = require("./farid.comment");

const customReduce = require("./farid.mock");

describe("isEven function", () => {
  it("should throw error in different argument type", () => {
    expect(() => isEven("4")).toThrow("Typeof passed value is not number!");
  });

  it("should be result true", () => {
    expect(isEven(4)).toBeTruthy();
  });

  it("should be result false", () => {
    expect(isEven(7)).toBeFalsy();
  });
});

describe("isPrime function", () => {
  it("should throw error in different argument type", () => {
    expect(() => isPrime("7")).toThrow("Typeof passed value is not number!");
  });

  it("should be result true", () => {
    expect(isPrime(29)).toBeTruthy();
  });

  it("should be result false", () => {
    expect(isPrime(18)).toBeFalsy();
    expect(isPrime(-2)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
  });
});

describe("reverseArray function", () => {
  it("shoul reverse the array, ex: ([3,5,8] => [8,5,3]) ", () => {
    expect(reverseArray([3, 5, 8])).toEqual([8, 5, 3]);
  });
});

describe("merge function", () => {
  it("should throw error the case of the argument type is null", () => {
    expect(() => merge(null, { firstName: "farid" })).toThrow(
      "Cant merge nullable value!"
    );
    expect(() => merge({ firstName: "wolter" }, null)).toThrow(
      "Cant merge nullable value!"
    );
  });

  it("should throw error in different argument type", () => {
    expect(() => merge({ firstName: "wolter" }, "white")).toThrow(
      "Arguments must be object or array!"
    );
    expect(() => merge("guluzade", { firstName: "wolter" })).toThrow(
      "Arguments must be object or array!"
    );
  });

  it("should merge two separate typeof object into one array the case of the first argument is array", () => {
    expect(merge([2, 4], { firstName: "wolter" })).toEqual([
      2,
      4,
      { firstName: "wolter" },
    ]);
  });

  it("should merge two  separate typeof object into one object the case of the first argument is NOT array ", () => {
    expect(merge({ firstName: "wolter" }, [3, 4])).toEqual({
      0: 3,
      1: 4,
      firstName: "wolter",
    });
  });
});

describe("removeLastChar function", () => {
  it("should throw error in different argument type", () => {
    expect(() => removeLastChar(7)).toThrow("Typeof argument must be string!");
  });

  it("should remove last char from string", () => {
    expect(removeLastChar("Wolter")).toBe("Wolte");
  });
});

describe("testStatement function", () => {
  it("should throw error first argument in different argument type", () => {
    expect(() => testStatement(10, "wolter", "white")).toThrow(
      "Type of first argument must be boolean!"
    );
  });

  it("should return truthyValue argument the case of the statement is true", () => {
    expect(testStatement(true, "Wolter", "Gustavo"));
  });

  it("should return falsyValue argument the case of the statement is false", () => {
    expect(testStatement(false, "Wolter", "Gustavo"));
  });
});

describe("getLocalCurrency function", () => {
  it("should return undefined the case of the don't find currency ", () => {
    expect(getLocalCurrency("BR")).toBeUndefined();
  });

  it("should return contry currency the case of the argument ", () => {
    expect(getLocalCurrency("PL")).toBe("ZL");
  });
});

describe("Create comment functionality", () => {
  const createdData = {
    body: "Winter is coming...",
    postId: 3,
    userId: 5,
  };

  const expectedResult = {
    id: 341,
    body: "Winter is coming...",
    postId: 3,
    user: {
      id: 5,
      username: "kmeus4",
    },
  };
  const invalidData = "Winter is coming...";
  const expectedError = "Could not create comment!";

  it("should fetch POST request result of the createdData be the same with the expected result", () => {
    return createComment(createdData).then((data) => {
      expect(data).toEqual(expectedResult);
    });
  });

  it("should fetch POST request result of the createdData be the same with the expected result", async () => {
    const data = await createComment(createdData);
    expect(data).toEqual(expectedResult);
  });

  it("should fetch POST request result of the createdData be the same with the expected result", async () => {
    await expect(createComment(createdData)).resolves.toEqual(expectedResult);
  });

  it("should be created comment will be stored in storage", async () => {
    const data = await createComment(createdData);
    const storeData = getCommentFromStore(data.id);

    expect(storeData).toEqual(expectedResult);
  });

  it("should  fetch fails with invalid data", () => {
    return createComment(invalidData).catch((err) => {
      expect(err.message).toMatch(expectedError);
    });
  });

  it("should fetch fails with invalid data", async () => {
    expect.assertions(1);
    try {
      await createComment(invalidData);
    } catch (e) {
      expect(e.message).toMatch(expectedError);
    }
  });
});

describe("Update comment functionality", () => {
  const updatedData = "I am the one who knocks.";
  const updatedId = 3;
  const expectedResult = {
    id: 3,
    body: "I am the one who knocks.", // only body was updated
    postId: 61,
    user: {
      id: 29,
      username: "jissetts",
    },
  };

  const invalidId = -1;
  const expectedError = "Could not update comment!";

  it("should fetch PUT request result of the updatedData be the same with the expected result", () => {
    return updateComment(updatedId, updatedData).then((data) => {
      expect(data).toEqual(expectedResult);
    });
  });

  it("should fetch PUT request result of the updatedData be the same with the expected result", async () => {
    const data = await updateComment(updatedId, updatedData);
    expect(data).toEqual(expectedResult);
  });

  it("should fetch PUT request result of the updatedData be the same with the expected result", async () => {
    await expect(updateComment(updatedId, updatedData)).resolves.toEqual(
      expectedResult
    );
  });

  it("should be updated comment will be updated in storage", async () => {
    await updateComment(updatedId, updatedData);
    const storeData = getCommentFromStore(341);

    expect(storeData).toEqual(expectedResult);
  });

  it("should fetch fails with invalid id", () => {
    return updateComment(invalidId, updatedData).catch((err) => {
      expect(err.message).toMatch(expectedError);
    });
  });

  it("should fetch fails with invalid id", async () => {
    try {
      await updateComment(invalidId, updatedData);
    } catch (e) {
      expect(e.message).toMatch(expectedError);
    }
  });
});

describe("Delete comment functionality", () => {
  const deletedId = 3;
  const expectedResult = {
    id: 3,
    body: "You are an amazing writer!",
    postId: 61,
    user: {
      id: 29,
      username: "jissetts",
    },
    isDeleted: true,
  };

  const invalidId = -1;
  const expectedError = "Could not delete comment!";

  it("should fetch DELETE request result of the data be the same with the expected result", () => {
    return deleteComment(deletedId).then((data) => {
      expect(data).toEqual(expectedResult);
    });
  });

  it("should fetch DELETE request result of the data be the same with the expected result", async () => {
    const data = await deleteComment(deletedId);
    expect(data).toEqual(expectedResult);
  });

  it("should fetch DELETE request result of the data be the same with the expected result", async () => {
    await expect(deleteComment(deletedId)).resolves.toEqual(expectedResult);
  });

  it("should be deleted comment will be isDeleted = true in storage", async () => {
    await deleteComment(deletedId);
    const storeData = getCommentFromStore(341);

    expect(storeData).toEqual(expectedResult);
  });

  it("should fetch fails with invalid id", () => {
    return deleteComment(invalidId).catch((err) => {
      expect(err.message).toMatch(expectedError);
    });
  });

  it("should fetch fails with invalid id", async () => {
    try {
      await deleteComment(invalidId);
    } catch (e) {
      expect(e.message).toMatch(expectedError);
    }
  });
});

describe.only("custom reduce mock function", () => {
  const arr = [1, 2, 3];
  const mockSum = jest.fn((acc, cur) => acc + cur);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call the callback function the correct number of times", () => {
    customReduce(arr, mockSum);
    expect(mockSum.mock.calls).toHaveLength(2);
  });

  it("should call the callback function the correct number of times", () => {
    customReduce(arr, mockSum, 3);
    expect(mockSum.mock.calls).toHaveLength(3);
  });

  it("should use the first element of the array as the accumulator when initial value is undefined", () => {
    customReduce(arr, mockSum);
    expect(mockSum.mock.calls[0][0]).toBe(1);
  });

  it("should use the initial value as the accumulator when initial value was declared", () => {
    customReduce(arr, mockSum, 3);
    expect(mockSum.mock.calls[0][0]).toBe(3);
  });

  it("should use the second element of the array as the current value when initial value is undefined", () => {
    customReduce(arr, mockSum);
    expect(mockSum.mock.calls[0][1]).toBe(2);
  });

  it("should use the first element of the array as the current value when initial value was declared", () => {
    customReduce(arr, mockSum, 3);
    expect(mockSum.mock.calls[0][1]).toBe(1);
  });

  it("should return value of the first call to the function  3 when initial value was undefined", () => {
    customReduce(arr, mockSum);
    expect(mockSum.mock.results[0].value).toBe(3);
  });

  it("should return value of the first call to the function 4 when initial value was declared (3 + 1)", () => {
    customReduce(arr, mockSum, 3);
    expect(mockSum.mock.results[0].value).toBe(4);
  });

  it("should throw error when array is empty", () => {
    expect(() => customReduce([], mockSum)).toThrow(
      "Cannot reduce of empty array!"
    );
  });
});
