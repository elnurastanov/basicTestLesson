const store = new Map();
const id = 1;

function addComment() {
    return fetch('https://dummyjson.com/comments/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            body: 'This makes all sense to me!',
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


function updateComment() {
    return fetch('https://dummyjson.com/comments/1', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          body: 'Updated Datas',
        })
      })
      .then(res => res.json())
      .then((data) => {
        store.set(341 ,data);
        return data
      });
}

function deleteComment() {
    return fetch('https://dummyjson.com/comments/1', {
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
