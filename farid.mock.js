const customReduce = (array, callbackFn, initialValue) => {
  if (!array.length) throw new Error("Cannot reduce of empty array!");

  let accumulator = initialValue === undefined ? array[0] : initialValue;

  let index = initialValue === undefined ? 1 : 0;

  for (; index < array.length; index++) {
    accumulator = callbackFn(accumulator, array[index], index, array);
  }

  return accumulator;
};

module.exports = customReduce;
