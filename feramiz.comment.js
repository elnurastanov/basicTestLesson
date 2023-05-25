const store = new Map();

function postComment(id) {
  const url = new URL(`comments/add`, "https://dummyjson.com");
  return fetch(url.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      body: "This makes all sense to me!",
      postId: id,
      userId: 5,
    }),
  }).then((res) => {
    return res.json();
  });
}

function postAndStore(id) {
  const data = postComment(id);
  store.set(id, data);
}

function getPostedCommentFromStore(id) {
  const data = postComment(id);
  store.get(id, data);
}

async function updateComment(id) {
  const url = new URL(`comments/${id}`, "https://dummyjson.com");
  return await fetch(url.toString(), {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      body: "I think I should shift to the moon",
    }),
  }).then((res) => {
    return res.json();
  });
}

async function updateAndStore(id) {
  const data = await updateComment(id);
  store.set(id, data);
}

function getUpdatedDataFromStore(id) {
  store.get(id);
}

async function deleteComment(id) {
  const url = new URL(`comments/${id}`, "https://dummyjson.com");
  return await fetch(url.toString(), {
    method: "DELETE",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return {
        id: data.id,
        body: data.body,
        postId: data.postId,
        user: data.user,
        isDeleted: data.isDeleted,
      };
    });
}

async function deleteAndStore(id) {
  const data = await deleteComment(id);
  store.set(id, data);
}

async function getDeletedDatafromStore(id) {
  store.get(id);
}

module.exports = {
  postComment,
  postAndStore,
  getPostedCommentFromStore,
  updateComment,
  updateAndStore,
  getUpdatedDataFromStore,
  deleteComment,
  deleteAndStore,
  getDeletedDatafromStore,
};
