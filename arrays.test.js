const { describe, expect, test } = require('@jest/globals')
const highestOddsum = require('./arrays')

describe('Highest Odd Sum', () => {
    it('Find the highest sum in an array, [19, 2, 42, 18] should return 61', () => {
        expect(highestOddsum([19, 2, 42, 18])).toBe(61)
    })
    it('Find the highest sum in an array, [61, 32, 51] should return 93', () => {
        expect(highestOddsum([61, 32, 51])).toBe(93)
    })
    it('Return even if no result available [62, 32, 52] should return Nan', () => {
        expect(highestOddsum([62, 32, 52])).toBeNaN()
    })
})
