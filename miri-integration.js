let db = []

//fetchProduct
function fetchProduct() {
    let url = new URL(`products`, "https://dummyjson.com");
    url.searchParams.set('limit','10');
    return fetch(url).then(res => res.json());
}

//fetch and Store
async function fetchStore() {
    const data = await fetchProduct();
    db = [...data.products];
    return db;
}
//get product with id
async function getProduct(id) {
    await fetchStore();
    return db.filter(pr => pr.id == id);
}
//Product update
async function prUpdate(id, obj) {
    await fetchStore()
    let url = new URL(`products/${id}`, "https://dummyjson.com")
    let response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then(res => res.json());
    db = db.map(pr => {
        return id == pr.id ? { ...response } : pr
    })
    return {response,db}
}
//Product delete
async function prDelete(id) {
    await fetchStore()
    let url = new URL(`products/${id}`, "https://dummyjson.com");
    let response = await fetch(url, { method: 'DELETE' })
    if (response.ok) {
        db = db.filter(pr => pr.id != id);
    }
    return {response,db};
}
module.exports = {
    fetchProduct, fetchStore, getProduct, prUpdate, prDelete
}