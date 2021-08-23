export const suma = (a,b) => a + b;

// given a array of numbers add 1 on each number

export const addingOne = (arr) => {

  if(!(arr instanceof Array)) return "Error only Arrays"

  if(arr.length === 0) return "Not emptys arrays"

  const doubleNumbers = arr.map(x => x + 1)

  return doubleNumbers;
}

// given a array and var n, filter on the array only numbers higest that the var n

export const filterHighToN = (arr,n) => {

  if(typeof n === "undefined") return "Must be a n value" 

  if(arr.length === 0) return "No empty arrays"

  const maxNumber = arr.reduce((a,b) => {
    return a > b ? a : b
  })

  if(maxNumber < n ) return "There is not a number higest of n"

  const filtradosHighToN = arr.filter( x => x > n)

  return filtradosHighToN;
}

// given a string counter each letter from this


export const counterOfLetters = (word) => {
  const converToArr = word.split("")
  const letters = converToArr.reduce((a,b) => {
    a[b] ? a[b]++ : a[b] = 1
    return a
  },{})
  return letters
}

// given a array with four words must be deleted the anagram that is repeat on the array
// input ["aroma","amor","roma","amer"]
// expect output ["aroma","amor","amer"]

const convertWord = (word) => {
  const wordToKey = word.split("").sort().join("")
  return wordToKey
}

export const searchAnagramInArray = (arr) => {

  if(arr.length < 1 || !(Array.isArray(arr)) ) return undefined

  let arrToReturn = []
  const wordsAndKeys = arr.map(x => ({
    word:x,
    key: convertWord(x)
  }))
  const filterKeys = wordsAndKeys.map(x => x.key).filter((x,i,all) => {
    return i === all.indexOf(x)
  })
  filterKeys.forEach(element => {
    arrToReturn.push(wordsAndKeys.find(x => x.key === element).word)
  });

  return arrToReturn
}

export const fizzBuzz = (n) => {

  if(n <= 2) throw new Error('Only numbers highest  to 2')
  if(n === undefined || typeof n !== 'number') throw new Error('You must provide a number.')

  let result = [];
  for(let i = 1; i <= n; i++){
    i % 3 === 0 && i % 5 === 0 ? result.push("fizzBuzz") : 
    i % 3 === 0 ? result.push("fizz") :
    i % 5 === 0 ? result.push("bizz") :
    result.push(i)
  }

  return result
}

export const palindrome = (str) => {
  const cleanWord = (wrd) => {
    return wrd.replaceAll(/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\,\.\_\-]/g,"")
    .replaceAll(" ","")
    .toLowerCase()
  }
  const orignalWrd = cleanWord(str)
  const reverseWrd = cleanWord(str).split('').reverse().join('')
  const isPalindrome = orignalWrd ===  reverseWrd ? true : false
  return isPalindrome
}

export const convertToRoman = (number) => {
  let romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let result = '';

  for (let i in romanNumbers ) {
    result = result + i.repeat(Math.floor(number / romanNumbers[i]))
    number = number % romanNumbers[i]
  }

  return result
}
