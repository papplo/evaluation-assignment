const { expect } = require('@jest/globals')
const transformation = require('./index')

test('Transform strings, "ffdttttyy" should return "ffdtttyy"', () => {
    expect(transformation('ffdttttyy')).toBe('ffdtttyy')
})

test('Transform strings, "iiikigggg" should return "iiikiggg"', () => {
    expect(transformation('iiikigggg')).toBe('iiikiggg')
})