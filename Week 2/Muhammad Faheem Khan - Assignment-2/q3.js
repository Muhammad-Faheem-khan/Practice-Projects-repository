// Question - 3
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
// let str2 = “ don’t know why”
// Example output: “yes”

let str2 = "don't know why";
let findTheChar = 'no'

for(let i=0;i<str2.length;i++){
    if(str2[i]=== 'y'){
        findTheChar = 'yes'
    }
}
console.log(findTheChar)
