// Question - 7
// Declare and initialize a string with your first name “Haseeb”, convert this string into an array, reverse the array and
// convert it back into a string.
// Your Output should look like “beesaH”

var str = 'Faheem'
    str = str.split('')
    str = str.reverse()
    str = str.join('')

    // can also do in chain operation
    // str = str.split('').reverse().join('')

console.log(str)