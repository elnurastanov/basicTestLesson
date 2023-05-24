const {
  fetchComment,
  fetchAndStore,
  createComment,
  createAndStore,
  updateComment,
  updateAndStore,
  deleteComment,
  deleteAndStore,
  getCommentFromStore,
} = require('./tural.comment')

describe("Fetch comment functionality", () => {
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
    await fetchAndStore(defaultId);
    const data = getCommentFromStore(defaultId);

    expect(data).toEqual(expectedResult);
  });
});


//create test
describe("Create comment functionality", () => {

  const defaultData = {
    body: 'This makes all sense to me!',
    postId: 3,
    userId: 5,
  };

  const expectedResult = {
    "id": 341,
    "body": "This makes all sense to me!",
    "postId": 3,
    "user": {
      "id": 5,
      "username": "kmeus4"
    }
  };

  const expectedNotFoundResult = {
    message: "Comment with id '-1' not found",
  };

  const expectedInvalidBody = { message: 'Invalid comment body' }

  it("should fetch result of data be same with expected result (Promise)", () => {
    return createComment(defaultData).then((data) => {
      expect(data).toEqual(expectedResult);
    });
  });

  it("should fetch result of data be same with expected result (Async/Await)", async () => {
    const data = await createComment(defaultData);
    expect(data).toEqual(expectedResult);
  });

  it("should fetch result of data be same with expected result (Async/Promise)", async () => {
    await expect(createComment(defaultData)).resolves.toEqual(expectedResult);
  });

  it("should be created comment will be stored in storage", async () => {
    await createAndStore(defaultData);
    const data = getCommentFromStore(defaultData.id);
    expect(data).toEqual(expectedResult);
  });

  it("should return invalid comment body for empty body", () => {
    return createComment({...defaultData, body:''}).then((data) => {
      expect(data).toEqual(expectedInvalidBody);
    });
  });
});

//update test
describe("Update comment functionality", () => {

  const defaultData = {
    body: 'I think I should shift to the moon',
  };

  const expectedResult = {
    "id": 1,
    "body": "I think I should shift to the moon", // only body was updated
    "postId": 100,
    "user": {
      "id": 63,
      "username": "eburras1q"
    }
  };

  const commentId = 1;

  const expectedNotFoundResult = {
    message: "Comment with id '-1' not found",
  };

  it("should fetch result of data be same with expected result (Promise)", () => {
    return updateComment(defaultData, commentId).then((data) => {
      expect(data).toEqual(expectedResult);
    });
  });

  it("should fetch result of data be same with expected result (Async/Await)", async () => {
    const data = await updateComment(defaultData, commentId);
    expect(data).toEqual(expectedResult);
  });

  it("should fetch result of data be same with expected result (Async/Promise)", async () => {
    await expect(updateComment(defaultData, commentId)).resolves.toEqual(expectedResult);
  });

  it("should be updated comment will be stored in storage", async () => {
    await updateAndStore(defaultData, commentId);
    const data = getCommentFromStore(commentId);
    expect(data).toEqual(expectedResult);
  });

  it("should not found result be same with expected not found result", () => {
    return updateComment(defaultData,-1).then((data) => {
      expect(data).toEqual(expectedNotFoundResult);
    });
  });
});

//delete test
describe("Delete comment functionality", () => {

  const expectedResult = {
    "id": 1,
    "body": "This is some awesome thinking!",
    "postId": 100,
    "user": {
        "id": 63,
        "username": "eburras1q"
    },
    "isDeleted": true,
    // "deletedOn": (() => new Date().toISOString())()
  };

  const commentId = 1;

  const expectedNotFoundResult = {
    message: "Comment with id '-1' not found",
  };

  it("should delete response result of with default id be same with expected result (Promise)", () => {
    return deleteComment(commentId).then((data) => {
      expect(data).toEqual({...expectedResult,"deletedOn":data.deletedOn});
    });
  });

  it("should delete response result of with default id be same with expected result (Async/Await)", async () => {
    const data = await deleteComment(commentId);
    expect(data).toEqual({...expectedResult,"deletedOn":data.deletedOn});
  });

  it("should fetch result of data be same with expected result (Async/Promise)", async () => {
    let data = await deleteComment(commentId)
    expect(data).toEqual({...expectedResult,"deletedOn":data.deletedOn})
  });

  it("should be updated comment will be stored in storage", async () => {
    await deleteAndStore(commentId);
    const data = getCommentFromStore(commentId);
    expect(data).toEqual({...expectedResult,"deletedOn":data.deletedOn});
  });

  it("should not found result be same with expected not found result", () => {
    return deleteComment(-1).then((data) => {
      expect(data).toEqual(expectedNotFoundResult);
    });
  });
});