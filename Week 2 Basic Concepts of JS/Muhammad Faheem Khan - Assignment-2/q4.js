// Question - 4 (functions, loops, if/else conditions)
// Write a function which takes as parameter an array of numbers and displays if the array is an
// even array, an odd array or a mixed array.
// An even array is an array which has all even numbers.
// An odd array is an array which has all odd numbers.
// A mixed array is an array which has both even and odd numbers.
// Sample output - 1 [2,4,8,10]
// The array is an even array.
// Sample output - 2 [3, 7, 5, 9]
// The array is an odd array.
// Sample output - 3 [2,4,8,3,10]
// The array is a mixed array.
// Hint: you can count the number of even and odd elements and based on that count print the
// result.

function checkArray(arr){
    count = 0
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2 === 0){
            count++
        }
    }
    if(count === arr.length){
        console.log('The array is an even array')
    }else if(count === 0){
        console.log('The array is an odd array')
    }else{
        console.log('The array is a mixed array')
    }
}

// Sample output-1 
checkArray([2,4,8,10])

// Sample output-1
checkArray([3,7,5,9])

// Sample output-1
checkArray([2,4,8,3,10])
