function arrayReducer(array, callback, initialValue) {

    if(array.length == 0) throw new Error('array is empty');
    if(callback == undefined) throw new Error('a callback function is required');

    if (initialValue == undefined) initialValue = array[0]
    accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        accumulator = callback(accumulator, currentValue)
    }

    return accumulator
}

function sum(a, b) {
    return a + b
}

function multiply(a, b){
    return a * b
}

const axios = require('axios');

function Comments() {
    return axios.get('/comment.json').then(resp => resp.data);
}

module.exports = {
    arrayReducer,
    sum,
    multiply,
    Comments
};