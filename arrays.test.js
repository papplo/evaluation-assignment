const { expect } = require('@jest/globals')
const highestOddsum = require('./arrays')

test('Find the highest sum in an array, [19, 2, 42, 18] should return 61', () => {
    expect(highestOddsum([19, 2, 42, 18])).toBe(61)
})
test('Find the highest sum in an array, [61, 32, 51] should return 93', () => {
    expect(highestOddsum([61, 32, 51])).toBe(93)
})