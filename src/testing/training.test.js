import { expect } from "@jest/globals"
import {sum,
        addingOne,
        filterHighToN,
        counterOfLetters,
        searchAnagramInArray,
        fizzBuzz,
        convertToRoman,
        palindrome
        }
from "../code/app-jest.js"

describe('test function sum', () => {
  it("should return valid sum", () => {
    expect(sum(1,2)).toBe(3)
  })
})

describe("Test function addingOne", () => {
  it("should be return the array with a plus in each number", () => {
    const arrayNumber = [1,2,3,4,5,6];
    const result = addingOne(arrayNumber)
    expect(result).toEqual([2,3,4,5,6,7])
  })
  it("if the param is a string/number/object should return an error message", () => {
    expect(addingOne("w")).toBe("Error only Arrays")
    expect(addingOne(2)).toBe("Error only Arrays")
    expect(addingOne({hola : 'w'})).toBe("Error only Arrays")
  })
  it("if the param is a empty array should return a message of this", () => { 
    const emptyArr = []; 
    const result = addingOne(emptyArr) 
    expect(result).toBe("Not emptys arrays")
  })
})

describe("Test function filterHighToN ", () => {
  it("filterHighToN should be return numbers high to var n", () => {
    const n = 6;
    const arrNumber = [1,2,3,4,5,1,2,3,6,7,8,9,10,11]
    const result = filterHighToN(arrNumber,n)
    expect(result).toEqual([7,8,9,10,11]) 
  })
  it("filterHighToN should be return a message if in the array are not a number more higher to var n ", () => {
    const n = 100
    const arrNumber = [1,2,3,4,5,1,2,3,6,7,8,9,10,11]
    const result = filterHighToN(arrNumber,n)
    expect(result).toBe("There is not a number higest of n")
  })
  it("filterHighToN should be return a message if array is empty or the var n is not present", () => {
    const emptyArr = []
    const resultEmpty = filterHighToN(emptyArr,5)
    const arrNumber = [1,2,3,4,5]
    expect(resultEmpty).toBe("No empty arrays")
    expect(filterHighToN(arrNumber)).toBe("Must be a n value")
  })
})

describe("Test function counterOfLetters", () => {
  it("counterOfLetters should be return a count of each letter of the var word", () => {
    const word = "azucar"
    const result = counterOfLetters(word)
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
  it("Should be return Undefined if we pass a empty array or the value is string / number or obj", () => {
    const emptyArray = []
    const obj = {test:"test"}
    const n = 2;
    const wrd = "test"
    expect(searchAnagramInArray(emptyArray)).toBeUndefined()
    expect(searchAnagramInArray(obj)).toBeUndefined()
    expect(searchAnagramInArray(n)).toBeUndefined()
    expect(searchAnagramInArray(wrd)).toBeUndefined()
  })
})

describe("Test function fizzBuzz" , () => {
  it("If we pass a parameter like 0, 1 or 2 must be throw a Error",() => {
    expect(() => fizzBuzz(0)).toThrow('Only numbers highest to 2');
    expect(() => fizzBuzz(1)).toThrow('Only numbers highest to 2');
    expect(() => fizzBuzz(2)).toThrow('Only numbers highest to 2');
  })
  it("If we pass a parameter as a string/undefined or obj must be throw a Error",() => {
    expect(() => fizzBuzz("3")).toThrow("You must provide a number.");
    expect(() => fizzBuzz()).toThrow("You must provide a number.");
    expect(() => fizzBuzz({test: "test"})).toThrow("You must provide a number.");
  })
  it("Should be return fizz three times with a For from 1 to 9",() => {
    const n = 9;
    const expected = [1, 2, "fizz", 4, "bizz", "fizz", 7, 8, "fizz"]
    const result = fizzBuzz(n)
    expect(result).toEqual(expected)
  })
  it("Should be return buzz two times with a For from 1 to 10",() => {
    const n = 10;
    const expected = [1, 2, "fizz", 4, "bizz", "fizz", 7, 8, "fizz","bizz"]
    const result = fizzBuzz(n)
    expect(result).toEqual(expected)
  })
  it("should be return a fizzBuzz with a For from 1 to 15", () => {
  const n = 15
  const result = fizzBuzz(n)
  expect(result).toContain('fizzBuzz')
  })
})
describe("Test function convertToRoman", () => {
  it("should be throw a error when is pass a argument with the value falsy", () => {
    expect(() => convertToRoman(false)).toThrow("Unexpected value")
    expect(() => convertToRoman(undefined)).toThrow("Unexpected value")
    expect(() => convertToRoman(null)).toThrow("Unexpected value")
    expect(() => convertToRoman(NaN)).toThrow("Unexpected value")
  })
  it(" Should be return the numerical value in Roman correctly that we pass by parameter ", () => {
    const number = 25;
    const result = convertToRoman(number);
    const expected = "XXV"
    expect(result).toBe(expected)
  })
  it("Value number 3999 should return the string MMMCMXCIX",() => {
    const number = 3999;
    const result = convertToRoman(number)
    const expected = "MMMCMXCIX"
    expect(result).toBe(expected)
  })
  it(" Should be throw a Error if we pass a string/obj/array ",() => {
    expect(() => convertToRoman({test : "test"})).toThrow('Only numbers')
    expect(() => convertToRoman("test")).toThrow('Only numbers')
    expect(() => convertToRoman([])).toThrow('Only numbers')
  })

})

describe("Test Function palindrome", () => {
  it("palindrome should be return true on the word 'eye' ", () => {
    let word = "eye"
    let result = palindrome(word)
    expect(result).toBeTruthy()
  })
  it("palindrome should be return true on the word '_eye' ", () => {
    let word = "_eye"
    let result = palindrome(word)
    expect(result).toBeTruthy()
  })
  it(" palindrome should be return true on the word 'race car' ", () => {
    let word = "race car"
    let result = palindrome(word)
    expect(result).toBeTruthy()
  })
  it(" palindrome should be return false on the word 'not a palindrome car' ", () => {
    let word = "not a palindrome car"
    let result = palindrome(word)
    expect(result).toBeFalsy()
  })
  it("palindrome should be return false on the word 'nope'", () => {
    let word = "nope"
    let result = palindrome(word)
    expect(result).toBeFalsy()
  })
  it("palindrome should be return true on the word 'never odd or even' ", () => {
    let word = "never odd or even"
    let result = palindrome(word)
    expect(result).toBeTruthy()
  })
})