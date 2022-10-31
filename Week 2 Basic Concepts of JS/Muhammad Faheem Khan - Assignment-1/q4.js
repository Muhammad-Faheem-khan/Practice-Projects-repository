// Question - 4
// Declare and initialize an array with your first name
// If your name is Haseeb, your array should look like [‘H’, ‘A’, ‘S’, ‘E’, ‘E’, ‘B’] initially.
// How can you find what your name spells backward? Write a program that would log on the output screen your name
// backwards.
// If your name is Haseeb, your output should look like [‘B’, ‘E’, ‘E’, ‘S’, ‘A’, ‘H’]

var array = ['F','A','H','E','E','M']

var array1 = []
array1.push(array.pop())
array1.push(array.pop())
array1.push(array.pop())
array1.push(array.pop())
array1.push(array.pop())
array1.push(array.pop())

// we can also use built-in method of array which is array.reverse()

console.log(array1)