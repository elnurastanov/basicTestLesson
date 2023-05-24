const ID = 1;
const store = new Map();

function addComment(comment) {
  const url = new URL("/comments/add", "https://dummyjson.com");

  return fetch(url.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  })
    .then((res) => res.json())
    .then((data) => {
      store.set(ID, data);
      return data;
    });
}

function updateComment(id, comment) {
  const url = new URL(`/comments/${id}`, "https://dummyjson.com");

  return fetch(url.toString(), {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  })
    .then((res) => res.json())
    .then((data) => {
      store.set(ID, data);
      return data;
    });
}
function deleteComment(id) {
  const url = new URL(`/comments/${id}`, "https://dummyjson.com");

  return fetch(url.toString(), {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      store.delete(ID);
      return data;
    });
}

module.exports = { addComment, updateComment, deleteComment };
