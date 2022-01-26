// Write a function that takes an array of numbers and returns the maximum sum of two numbers whose digits have an odd sum.
const highestOddsum = (arrayOfNumbers) => {
    const sortDesc = (a, b) => b - a;
    const getHighestValue = (...args) => args.sort(sortDesc)[0]
    
    // mutate array in place, sort in descending order
    arrayOfNumbers.sort(sortDesc)

    // loop over the highest numbers until result is truthy, assign sum of odd and even to result
    let result, highestOddNumber, highestEvenNumber
    for (let index = 0; !result; index++) {
        const number = arrayOfNumbers[index] 
        number % 2 !== 0
            ? highestOddNumber = getHighestValue(number, highestOddNumber)
            : highestEvenNumber = getHighestValue(number, highestEvenNumber)

        result = highestOddNumber + highestEvenNumber

        if (index === arrayOfNumbers.length -1) {
            // break out of loop if no result found
            break;
        }
    }

    //finally return result
    return result

}



module.exports = highestOddsum