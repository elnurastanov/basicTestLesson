const store = new Map();

// fetch functions
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

// create functions
function createComment(defaultData) {
    return fetch('https://dummyjson.com/comments/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(defaultData)
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => error.message)
}

async function createAndStore(defaultData) {
    const data = await createComment(defaultData);
    store.set(defaultData.id, data);
}

// update functions
function updateComment(defaultData, commentId) {
    return fetch(`https://dummyjson.com/comments/${commentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(defaultData)
    })
    .then(res => res.json())
    .then(data => data)
    .catch((error) => error.message)
}

async function updateAndStore(defaultData, commentId) {
    const data = await updateComment(defaultData, commentId);
    store.set(commentId, data);
}

function getCommentFromStore(id) {
    return store.get(id);
}

function deleteComment(commentId) {
    return fetch(`https://dummyjson.com/comments/${commentId}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => err.message)
}

async function deleteAndStore(commentId) {
    const data = await deleteComment(commentId);
    store.set(commentId, data)
}

module.exports = {
    fetchComment,
    fetchAndStore,
    createComment,
    createAndStore,
    updateComment,
    updateAndStore,
    deleteComment,
    deleteAndStore,
    getCommentFromStore,
};