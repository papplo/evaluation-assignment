# Frontend evaluation assignment

### Algorithms
The first algorithm works with string.prototype.replaceAll functionality to iterate over matches returned by a regexp with a global flag. 
The regexp will return all matches of a single character repeated more than three times, and pass the result as arguments to a replacerFunction, match by match. 
The deletion is performed with function string.prototype.substring to "delete as few letters as possible". 

I believe it's the most effective and easily customizable way to run a transformation, for instance, we could inject both the regexp and replacer as dependencies into the inner scope of transform, without need to refactor any code. 

Complexity for algorithm - this function will run for as long as it takes to process the passed string argument: 0(n). For lengths over 150K characters, it would be suitable to use synchroneously, with a series of calls to the function, for instance while performing streamed request to an external source.

