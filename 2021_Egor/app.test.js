/* eslint-disable no-undef */
const { quarterOf, findSmallestInt, reverseWords } = require('./app');

describe('TDD', () => {
    test('Should return rigth quarter', () => {
        expect(quarterOf(3)).toEqual(1)
        expect(quarterOf(8)).toEqual(3)
        expect(quarterOf(11)).toEqual(4)
    })
   test('Should return smallest Integer', () => {
        expect(findSmallestInt([78, 56, 1.2, 232, 12, 8])).toEqual(8)
        expect(findSmallestInt([78, 56, 1.2, 232, 12, 18])).toEqual(12)
        expect(findSmallestInt([78, 56, 232, 412, 228, 1.2])).toEqual(56)
        expect(findSmallestInt([78, 56, 232, 12, 0, 0.2])).toEqual(0)
        expect(findSmallestInt([0.2, 1, 56, 232, 12, 8])).toEqual(1)
   });
   test('Should return reverse words', () => {
        expect(reverseWords("hello world!")).toEqual("world! hello")
        expect(reverseWords("yoda doesn't speak like this")).toEqual("this like speak doesn't yoda")
        expect(reverseWords("foobar")).toEqual("foobar")
        expect(reverseWords("kata editor")).toEqual("editor kata")
        expect(reverseWords("row row row your boat")).toEqual("boat your row row row")
    });
});
     