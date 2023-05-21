const store = new Map();

function fetchComment(id) {
  const url = new URL(`/comments/${id}`, "https://dummyjson.com");

  return fetch(url.toString()).then((response) => {
    return response.json();
  });
}

async function fetchAndStore(id) {
  const data = await fetchComment(id);

  store.set(id, data);
}

function getCommentFromStore(id) {
  return store.get(id);
}

module.exports = {
  fetchComment,
  fetchAndStore,
  getCommentFromStore,
};
