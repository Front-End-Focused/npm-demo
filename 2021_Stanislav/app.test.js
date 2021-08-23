let {quarterOf, findSmallestInt, reverseWords} = require("./app");

describe('Positive cases', () =>{

    test("should return number of quartal", () =>{
        expect(quarterOf(1)).toEqual(1);
        expect(quarterOf(2)).toEqual(1);
        expect(quarterOf(3)).toEqual(1);
        expect(quarterOf(4)).toEqual(2);
        expect(quarterOf(5)).toEqual(2);
        expect(quarterOf(6)).toEqual(2);
        expect(quarterOf(7)).toEqual(3);
        expect(quarterOf(8)).toEqual(3);
        expect(quarterOf(9)).toEqual(3);
        expect(quarterOf(10)).toEqual(4);
        expect(quarterOf(11)).toEqual(4);
        expect(quarterOf(12)).toEqual(4);
    })

    test('Should return the smallest number', () => {
        expect(findSmallestInt([78,56,232,12,8])).toEqual(8);
        expect(findSmallestInt([78,56,232,12,18])).toEqual(12);
        expect(findSmallestInt([78,56,232,112,118])).toEqual(56);
        expect(findSmallestInt([78,156,232,112,118])).toEqual(78);
        expect(findSmallestInt([378,356,232,312,338])).toEqual(232);
    })

    test('should return  reverse string', () => {
        expect(reverseWords("hello world!")).toEqual("world! hello");
        expect(reverseWords("yoda doesn't speak like this")).toEqual("this like speak doesn't yoda");
        //expect(reverseWords("foobar")).toEqual("foobar");
        expect(reverseWords("kata editor")).toEqual("editor kata");
        expect(reverseWords("row row row your boat")).toEqual("boat your row row row");

    })

})