
// -----------------------SCPC Problem Solving
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. SOLVED :

const reverseString = inputString =>{
    const reverseArray = [];
    // console.log(inputString.split(''))

    inputString.split('').forEach(element => {
        reverseArray.unshift(element)
    });

    return reverseArray.join().replace(/[^a-zA-Z0-9 ]/g,'')
}
// const output = reverseString('hello world')
// console.log(output)

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
const positiveSum = inputArray=>{

    // console.log(inputArray)
    let sum = 0;
    for(let ele of inputArray){
        if(ele >0){
            sum +=ele
        }
    }

    return sum

}
// const output = positiveSum( [2, -5, 10, -3, 7])
// console.log(output)

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
const mostFrequentNum = inputArray=>{

    // console.log(inputArray)
    
    const counterObj = {}

    inputArray.forEach(ele=>{
       
            if(ele in counterObj){
                counterObj[ele] = counterObj[ele] + 1
            }else{
                counterObj[ele] = 1
            }
    })
    // console.log(counterObj)

    let tempNum = 0;
    let mostFrequentElement ;
    for(let prop in counterObj){
        if(counterObj[prop] >tempNum){
            tempNum = counterObj[prop]
            mostFrequentElement = prop
        }
    }
    
    return mostFrequentElement

}
// const output = mostFrequentNum( [3, 5, 2, 5, 3, 3, 1, 4, 5])
// console.log(output)

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
const sumOfTwoNum = (inputArray,target)=>{

    const length = inputArray.length
    const indicsArray = [];
    for(let i=0;i<length-1;i++){
        let leftPoint = i
        let rightPoint = i+1
        if(inputArray[leftPoint]+inputArray[rightPoint] === target){
            indicsArray.push(leftPoint)
            indicsArray.push(rightPoint)
        }
    }
    
    return indicsArray

}
// const output = sumOfTwoNum([1, 3, 6, 8, 11, 15], 9)
// console.log(output)

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const calculator = (firstNum,secoundNum,operator)=>{

    switch(operator){
        case '+':
            return firstNum + secoundNum;
        case '*':
            return firstNum * secoundNum;
        case '-':
            return firstNum - secoundNum;
        case '/':
            return firstNum / secoundNum;
        default:
            return 0
    }

}
// const output = calculator(10,2,'/')
// console.log(output)

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const passwordGenerator = (length)=>{

    const uppercaseArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
    const lowercaseArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));
    const specialCharArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?'];
    const digitsArray = Array.from({ length: 10 }, (_, index) => index);
    let charactrArray =[uppercaseArray,lowercaseArray,specialCharArray,digitsArray]
    // 
    function getRandomNum(range){
        const ran = Math.round(Math.random() * range) - 1
        return ran>0 ? ran : 0; 
    }
    
    // 
    function randomCharacter(randomArray){
        return randomArray[getRandomNum(randomArray.length)]
    }
    // 
  

    let password = []
    for(let i =0;i<length;i++){
        password.push(randomCharacter(charactrArray[getRandomNum(4)]))
    }

    return password.toString().replace(/[,]/g,'');
   
}
// const output = passwordGenerator(7)
// console.log(output)

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secoundSmallestNumber = (inputArray)=>{

    const length = inputArray.length
    let smallestNumber = Infinity;
    let secoundSmallest = Infinity;

    for(let i=0;i<length;i++){
        if(smallestNumber > inputArray[i]){
            smallestNumber = inputArray[i]
        }
    }
    for(let i=0;i<length;i++){
        if(inputArray[i] === smallestNumber){
            continue
        }
        if(secoundSmallest > inputArray[i]){
            secoundSmallest = inputArray[i]
        }
    }

   

   return secoundSmallest
   
}
// const output = secoundSmallestNumber([3,5,1,6,7,2,9,-1])
// console.log(output)

