// Question - 8
// Declare and initialize a string with your full name “Haseeb Arshad”, convert the string onto an array. Remove your first
// name from the array using slice and convert the array back into a string.
// Your Output should look like “Arshad”

var str = 'Faheem Khan'
    str = str.split('')
    str = str.slice(7) 
    str = str.join('')

    // can be done in chain operation
    // str = str.split('').slice(7).join('')

    console.log(str)