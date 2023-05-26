const myReduce = (list, cb, intial) => {
  if (!intial) {
    if (typeof list[0] == "string") {
      intial = "";
    } else if (typeof list[0] == "number") {
      intial = 0;
    }
  }
  for (let i = 0; i < list.length; i++) {
    intial = cb(list[i], intial);
  }
  return intial;
};

module.exports = { myReduce };
