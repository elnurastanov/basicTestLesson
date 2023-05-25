const store = new Map();
const id = 1;

function addComment(body) {
    return fetch('https://dummyjson.com/comments/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            body: `${body}`,
            postId: 3,
            userId: 5,
        })
    })
    .then(res => res.json())
    .then((data) => {
        store.set(id ,data)
        return data
    })
}


function updateComment(id) {
    return fetch(`https://dummyjson.com/comments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          body: 'Updated Datas',
        })
      })
      .then(res => res.json())
      .then((data) => {
        store.set(id ,data);
        return data
    });
}

function deleteComment(id) {
    return fetch(`https://dummyjson.com/comments/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then((data) => {
        store.delete(id ,data)
        return data
    });    
}

module.exports = {
    addComment,
    updateComment,
    deleteComment
}
