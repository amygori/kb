# Week 3

## Day 1

* Node & NPM
* Compiling assets with Parcel
* Sass
* BEM

### Links

* [Notes from class](notes/d1.md)
* [NPM](https://www.npmjs.com/)
* [Parcel](https://parceljs.org/)
* [Sass](https://sass-lang.com/)
* [GetBEM](http://getbem.com/introduction/)
* [CSS Guidelines](https://cssguidelin.es/)

## Day 2

* Object-oriented programming
* Review JS objects
* JS prototypes
* Understanding this

### Links

* Notes and examples
  * [OO concepts](notes/oo-concepts.md)
  * [OO for JavaScript](notes/oo-javascript.md)
  * [Example: Simple Form](examples/simple-form/)
  * [Example: Step Tracker](examples/steps/)

* [Object-oriented JavaScript for beginners](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
* [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* Understanding `this`
  * [JavaScript `this` keyword explained simply](https://medium.com/@NinjaJavaScript/javascript-this-keyword-explained-simply-e90762d4945d)
  * [Understanding JavaScript: This Keyword](https://hackernoon.com/understanding-javascript-the-this-keyword-4de325d77f68)

## Day 3

* ES6 syntax
  * `let` and `const`
  * Template literals
  * Arrow functions
  * Classes vs prototypes
  * Destructuring
* JavaScript modules
* Standard JavaScript style

### Links

* [ES6 Interactive Guide](http://stack.formidable.com/es6-interactive-guide/#/  )

## Day 4

* eslint
* Webpack/Grunt/Gulp - what are they?
* Pair programming

### Pair programming exercise: string calculator

#### Before you start

* Try not to read ahead.
* Do one task at a time. You are trying to learn to work incrementally.

#### Directions

1. Create a function to calculate a sum from a string.
  * The function should be called `addString` or `add_string` and take a string as an argument and return an integer.
  * The string can contain 0, 1, or 2 integers, separated by commas, and will return their sum. An empty string will return 0. Examples: "1" will return 1. "2,4" will return 6.
2. Allow the `addString` function to take an unlimited number of integers.
3. Allow the `addString` method to handle spaces before or after numbers. Example: "1, 12, 3" (will equal 16)
4. Allow the `addString` method to handle new lines between numbers instead of commas. Example: "1\n2,4" (will equal 7)
   * the following input is ok:  ``"1\n2,3"`` (will equal 6)
   * the following input is NOT ok:  ``"1,\n"`` (not need to prove it - just clarifying)
5. Calling ``addString()`` with a negative number in the string will print the output ``"negatives not allowed:"`` and the negative that was passed.

   For example ``add("1,4,-1")`` should throw an exception with the message ``"negatives not allowed: -1"``.

   If there are multiple negatives, show all of them in the message.   
6. Support different delimiters: to change a delimiter, the beginning of the string will contain a separate line that looks like this:   

   ``"//[delimiter]\n[numbers...]"``

   For example ``"//;\n1;2"`` should return 3 where the default delimiter is ``';'``.

   The first line is optional. 
   
   All existing scenarios should still be supported.
