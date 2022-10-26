

function timeConversion(s) {
    // Write your code here
    let str = ''
    if(s[s.length-2]==='A'){
        str = s.replace('AM','')
        console.log(s[0], s[1])
        if(s[0]==1 && s[1]==2){
            str[0] = '0'
            str[1] = '0'
        }
    }
    if(s[s.length-2]==='P'){
      str = s.replace('PM','')
       let hour = +s.slice(0,2) + 12
      let  newStr = str.split('')
       newStr.splice(0,2)
       str = newStr.join('')
       str = hour + str
        
    }
return str
}


console.log(timeConversion('12:05:45AM'))