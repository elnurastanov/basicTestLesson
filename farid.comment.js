const store = new Map();

async function createComment(createdData) {
  const res = await fetch("https://dummyjson.com/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createdData),
  });

  if (!res.ok) throw new Error("Could not create comment!");

  const data = await res.json();

  store.set(data.id, data);

  return data;
}

async function updateComment(id, updatedBody) {
  const res = await fetch(`https://dummyjson.com/comments/${id}`, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      body: updatedBody,
    }),
  });

  if (!res.ok) throw new Error("Could not update comment!");

  const data = await res.json();

  store.set(341, data);

  return data;
}

async function deleteComment(deletedId) {
  const res = await fetch(`https://dummyjson.com/comments/${deletedId}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Could not delete comment!");

  const data = await res.json();

  const newData = {
    id: data.id,
    body: data.body,
    postId: data.postId,
    user: data.user,
    isDeleted: data.isDeleted,
  };
  store.set(341, newData);

  return newData;
}

function getCommentFromStore(id) {
  return store.get(id);
}

module.exports = {
  createComment,
  updateComment,
  deleteComment,
  getCommentFromStore,
};
