// Question - 9
// Declare and initialize a string with your full name “Haseeb Arshad”, convert the string onto an array. Remove your last
// name from the array using splice and convert the array back into a string.
// Your Output should look like “Haseeb”

var str = 'Faheem Khan'
    str = str.split('')
    str = str.slice(0,7)
    str = str.join('')

    // These operations can be done in chain operation
    // str = str.split('').slice(0,7).join('')
    console.log(str)