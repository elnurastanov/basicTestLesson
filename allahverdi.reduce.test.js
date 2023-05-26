const { myReduce } = require("./allahverdi.reduce");

const mockCallback = jest.fn((item, acc) => acc + item);
let myarr = [1, 3, 5, 7];
test("should be return what i want", () => {
  myReduce(myarr, mockCallback, 1);
  expect(mockCallback.mock.results[3].value).toBe(17);
  expect(mockCallback.mock.calls).toHaveLength(4);
  expect(mockCallback.mock.calls[2][0]).toBe(5);
});
