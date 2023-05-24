const {
  fetchComment,
  fetchAndStore,
  getCommentFromStore,
} = require("./comment");

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

describe.only("Fetch comment functionality", () => {
  const defaultId = 1;
  const notFoundId = -1;
  const expectedResult = {
    id: 1,
    body: "This is some awesome thinking!",
    postId: 100,
    user: {
      id: 63,
      username: "eburras1q",
    },
  };
  const expectedNotFoundResult = {
    message: "Comment with id '-1' not found",
  };

  it("should fetch result of id 1 be same with expected result (Promise)", () => {
    return fetchComment(defaultId).then((data) => {
      expect(data).toEqual(expectedResult);
    });
  });

  it("should fetch result of id 1 be same with expected result (Async/Await)", async () => {
    const data = await fetchComment(defaultId);

    expect(data).toEqual(expectedResult);
  });

  it("should fetch result of id 1 be same with expected result (Async/Promise)", async () => {
    await expect(fetchComment(defaultId)).resolves.toEqual(expectedResult);
  });

  it("should not found result be same with expected not found result", () => {
    return fetchComment(notFoundId).then((data) => {
      expect(data).toEqual(expectedNotFoundResult);
    });
  });

  it("should be fetched comment will be stored in storage", async () => {
    await fetchAndStore(2);
    const data = getCommentFromStore(2);

    expect(data).toEqual(expectedResult);
  });
});
