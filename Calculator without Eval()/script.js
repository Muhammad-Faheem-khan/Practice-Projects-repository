
// display Element
let display = document.getElementById('display')
let arr = []
let i = 0;
let str = '';
function numeric(e) {
    str += e.target.value
    arr[i] = str
}
function operation(e) {
    arr.push(e.target.value)
    str = ''
    i += 2
}
function displayHandler(e) {
    display.value += e.target.value
}
function allClearHandler() {
    display.value = '';
    rest()
}
function clearHandler() {
    display.value = display.value.slice(0, -1)
    arr.pop()
    str = ''
}
function equalHandler() {
    calculation("/", res = 0, div = 0)
    calculation("*", res = 0, div = 0)
    calculation("+", res = 0, div = 0)
    calculation("-", res = 0, div = 0)
    display.value = arr[0]
    if (display.value == "Infinity") {
        rest()
    } else if (display.value == 'NaN' || display.value == 'undefined') {
        display.value = 'Error: Invalid Entry'
        rest()
    }
}
function rest(){
    arr = []
    i = 0
    str = ''
}

function calculation(oper, res, div) {
    while (div >= 0) {
        div = arr.indexOf(oper)
        if (div >= 1) {
            switch (oper) {
                case "/":
                    res = arr[div - 1] / arr[div + 1]
                    break
                case "*":
                    res = arr[div - 1] * arr[div + 1]
                    break
                case "+":
                    res = Number(arr[div - 1]) + Number(arr[div + 1])
                    break
                case "-":
                    res = arr[div - 1] - arr[div + 1]
                    break
            }

            arr.splice(div - 1, 3, res)
        }
    }
    return res
}
function handleError(){
    if(display.value == 'Error: Invalid Entry' || display.value == 'Infinity'|| display.value == '-Infinity'){
        display.value = ''
    }
}