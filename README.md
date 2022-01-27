# Frontend evaluation assignment

## Getting started
install dependencies with Yarn or NPM using your command line. You should have node installed on your machine.

run command ```yarn start``` to display app on http://localhost:1234

run command ```yarn test``` to show unit tests result

navigate to deployed app on [evaluation-assignment.vercel.app](https://evaluation-assignment.vercel.app)

### Algorithms
#### Text
The first algorithm works with string.prototype.replaceAll functionality to iterate over matches returned by a regexp with a global flag. 
The regexp will return all matches of a single character repeated more than three times, and pass the result as arguments to a replacerFunction, match by match. 
The deletion is performed with function string.prototype.substring to "delete as few letters as possible". 

I believe it's the most effective and easily customizable way to run a transformation, for instance, we could inject both the regexp and replacer as dependencies into the inner scope of transform, without need to refactor any code.

Complexity for algorithm - this function will run for as long as it takes to process the passed string argument: 0(n). For lengths over 150K characters, it would be suitable to use synchroneously, with a series of calls to the function, for instance while performing streamed request to an external source.

#### Arrays
Quite tricky, but simple to solve, the highest sum of a series of numbers (with an odd result) will always have an odd and an even number involved. 
I chose to start by sorting the incoming array in descending order. The array is iterated over, until i have both the highest even and odd numbers. For every loop the result is summed, and we break out of the loop for as long as there is no truthy value in result.

The complexity for the sorting algorithm is logarithmic, so more data means logarithmically increasing time for larger datasets. O(n log n).

In worst case, the looping part would encounter 99% even or odd numbers, so complexity would add upp with `+n`.

#### Component
Simple POC made to match inspirational image. Not a real-world type implementation, just a semantic layout using React controlled input and native HTML select's to render a form. Sprinkled with the validation rules i can come up with, mainly targeting the card number format. 
I could probably create constants for card-numbers (Visa, MC, Amex), adjusting the theming based on user input. For the name field, the string input shuold be encoded and fenced before transport, to secure malicious intent.

Note on how to evolve this code: I'd prefer to look at how to manage validation rules for a series of forms, keeping logic outside of the component, by using a schema that describes the model(s) and it's boundaries.
On another note, credit card data is also sensitive domain, and typing is an error-prone task for a user, why i'd motivate to not use effects or animations in this view.

