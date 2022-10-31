// Question - 10
// Declare and initialize a string with this text “The Quick Brown Fox, Jumps Over the Lazy Dog”. replace the word
// “Quick” with “Slow”, “Brown” with “Green”, “Fox” with “Turtle”, “Jumps” with “Wins” and “Dog” with “Race”. Also
// remove the words “Over” and “Lazy”.
// Your Output should look like “The Slow Green Turtle, Wins the Race”

var str = "The Quick Brown Fox, Jumps Over the Lazy Dog"

    str = str.replace('Quick','Slow')
    str = str.replace('Brown','Green')
    str = str.replace('Fox','Turtle')
    str = str.replace('Jumps','Wins')
    str = str.replace('Over','')
    str = str.replace('Lazy','')
    str = str.replace('Dog','Race')

    // these multiple instructions can be written in single line
    // str = str.replace('Quick','Slow').replace('Brown','Green').replace('Fox','Turtle').replace('Jumps','Wins').replace('Over','').replace('Lazy','').replace('Dog','Race')

    console.log(str)

