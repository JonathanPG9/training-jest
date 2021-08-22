import { expect } from "@jest/globals"
import {suma,arrPlusOne,
        filterHighToN,
        counterOfLetters,
        searchAnagramInArray,
        fizzBuzz
        }
from "../code/app"

describe('test function sum', () => {
  it("should return valid sum", () => {
    expect(suma(1,2)).toBe(3)
  })
})

describe("Test function arrPlusOne", () => {
  it("should be return the array with a plus in each number", () => {
    const arrayNumber = [1,2,3,4,5,6];
    const result = arrPlusOne(arrayNumber)
    expect(result).toEqual([2,3,4,5,6,7])
  })
  it("if the param is a string/number/object should return an error message", () => {
    expect(arrPlusOne("w")).toBe("Error only Arrays")
    expect(arrPlusOne(2)).toBe("Error only Arrays")
    expect(arrPlusOne({hola : 'w'})).toBe("Error only Arrays")
  })
  it("if the param is a empty array should return a message of this", () => { 
    const emptyArr = []; 
    const result = arrPlusOne(emptyArr) 
    expect(result).toBe("Not emptys arrays")
  })
})

describe("Test function filterHighToN ", () => {
  it("filterHighToN should be return numbers high to var n", () => {
    let n = 6;
    let arrNumber = [1,2,3,4,5,1,2,3,6,7,8,9,10,11]
    let result = filterHighToN(arrNumber,n)
    expect(result).toEqual([7,8,9,10,11]) 
  })
  it("filterHighToN should be return a message if in the array are not a number more higher to var n ", () => {
    let n = 100
    let arrNumber = [1,2,3,4,5,1,2,3,6,7,8,9,10,11]
    let result = filterHighToN(arrNumber,n)
    expect(result).toBe("There is not a number higest of n")
  })
  it("filterHighToN should be return a message if array is empty or the var n is not present", () => {
    let emptyArr = []
    let resultEmpty = filterHighToN(emptyArr,5)
    let arrNumber = [1,2,3,4,5]
    expect(resultEmpty).toBe("No empty arrays")
    expect(filterHighToN(arrNumber)).toBe("Must be a n value")
  })
})

describe("Test function counterOfLetters", () => {
  it("counterOfLetters should be return a count of each letter of the var word", () => {
    let word = "azucar"
    let result = counterOfLetters(word)
    expect(result).toEqual({
      a:2,
      z:1,
      u:1,
      c:1,
      r:1
    })
  })
})

describe("Test function searchAnagramInArray", () => {
  it("Should be return only one anagram on the array", () => {
    const arrayTest = ["aroma","amor","roma","amer"]
    const result = searchAnagramInArray(arrayTest)
    expect(result).toEqual(["aroma","amor","amer"])
  })
  it("Should be return Undefined if we pass a empty array or the value is string / number / obj", () => {
    const emptyArray = []
    const obj = {test:"test"}
    const n = 2;
    const wrd = "test"
    const result = searchAnagramInArray(emptyArray)
    expect(result).toBeUndefined()
    expect(searchAnagramInArray(obj)).toBeUndefined()
    expect(searchAnagramInArray(n)).toBeUndefined()
    expect(searchAnagramInArray(wrd)).toBeUndefined()
  })
})

describe("Test function fizzBuzz" , () => {
  it("If we pass a parameter like 0, 1 or 2 must be throw a Error",() => {
    expect(() => fizzBuzz(0)).toThrow('Only numbers highest  to 2');
    expect(() => fizzBuzz(1)).toThrow('Only numbers highest  to 2');
    expect(() => fizzBuzz(2)).toThrow('Only numbers highest  to 2');
  })
  it("If we pass a parameter as a string/undefined or obj must be throw a Error",() => {
    expect(() => fizzBuzz("3")).toThrow("You must provide a number.");
    expect(() => fizzBuzz()).toThrow("You must provide a number.");
    expect(() => fizzBuzz({test: "test"})).toThrow("You must provide a number.");
  })
  it("Should be return fizz three times with a For from 1 to 9",() => {
    let n = 9;
    let expected = [1, 2, "fizz", 4, "bizz", "fizz", 7, 8, "fizz"]
    let result = fizzBuzz(n)
    expect(result).toEqual(expected)
  })
  it("Should be return buzz two times with a For from 1 to 10",() => {
    let n = 10;
    let expected = [1, 2, "fizz", 4, "bizz", "fizz", 7, 8, "fizz","bizz"]
    let result = fizzBuzz(n)
    expect(result).toEqual(expected)
  })
  it("should be return a fizzBuzz with a For from 1 to 15", () => {
  let n = 15
  let result = fizzBuzz(n)
  expect(result).toContain('fizzBuzz')
  })
})
