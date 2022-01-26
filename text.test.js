const { expect, describe, it} = require('@jest/globals')
const transformation = require('./text')

describe('Text transform', () => {
    it('Transform strings, "ffdttttyy" should return "ffdtttyy"', () => {
        expect(transformation('ffdttttyy')).toBe('ffdtttyy')
    })
    
    it('Transform strings, "iiikigggg" should return "iiikiggg"', () => {
        expect(transformation('iiikigggg')).toBe('iiikiggg')
    })
})