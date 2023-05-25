function customReduce(array,reducer,initial = 0){
    let acc = 0
    for(let i=0;i<array.length;i++){
        acc = reducer(acc,array[i])
    }
    
    return (acc + initial)
}

let reducer = function(acc,item){
    return acc + item
}

module.exports = {customReduce}