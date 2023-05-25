const {
  postComment,
  getPostedCommentFromStore,
  postAndStore,
  updateComment,
  updateAndStore,
  getUpdatedDataFromStore,
  deleteAndStore,
  deleteComment,
  getDeletedDatafromStore,
} = require("./feramiz.comment");

describe("Post comment function", () => {
  const expectedPostResult = {
    id: 341,
    body: "This makes all sense to me!",
    postId: 3,
    user: {
      id: 5,
      username: "kmeus4",
    },
  };

  it("should post result be same with expected post result", async () => {
    return await postComment(3).then((data) => {
      expect(data).toEqual(expectedPostResult);
    });
  });

  it("should post function get id parameter", async () => {
    const expectedResult = { message: "Post id is required" };
    return await postComment().then((data) => {
      expect(data).toEqual(expectedResult);
    });
  });
  it("should be posted comment will be stored in storage", async () => {
    postAndStore(3);
    const data = getPostedCommentFromStore(3);
    expect(data).toEqual(data);
  });
});

describe("Update comment function", () => {
  const expectedUptadedtResult = {
    id: 1,
    body: "I think I should shift to the moon",
    postId: 100,
    user: {
      id: 63,
      username: "eburras1q",
    },
  };

  it("should updated result be same with expected post result", async () => {
    return await updateComment(1).then((data) => {
      expect(data).toEqual(expectedUptadedtResult);
    });
  });

  it("should be updated comment will be stored in storage", async () => {
    await updateAndStore(1);
    const data = getUpdatedDataFromStore(1);
    expect(data).toEqual(data);
  });
});

describe("Delete function", () => {
  const expectedDeletedData = {
    id: 7,
    body: "This is clear, concise, and complete!",
    postId: 47,
    user: {
      id: 22,
      username: "froachel",
    },
    isDeleted: true,
  };

  it("should be deleted comment result be same with expected post result", async () => {
    return await deleteComment(7).then((data) => {
      expect(data).toEqual(expectedDeletedData);
    });
  });

  it("should be deleted comment will be stored in storage", async () => {
    await deleteAndStore(7);
    const data = getDeletedDatafromStore(7);
    expect(data).toEqual(data);
  });
});
