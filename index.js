// create a function that runs a transformation on certain string patterns...

const transformation = function(stringPattern = 'aaaBBBBcccddddEEEffff') {
    const transformationRegex = new RegExp(/(.)\1{3,}/, 'g')
    const replacerFn = (arg) => {
        return arg.match('[A-Z]') ? arg : arg.substr(0, 3)
    }

    return stringPattern.replaceAll(transformationRegex, replacerFn)
}

module.exports = transformation



