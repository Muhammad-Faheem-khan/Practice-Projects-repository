
// display 
let display = document.getElementById('display')

function displayHandler(e) {
    display.value += e.target.value
}
function allClearHandler() {
    display.value = ''
}
function clearHandler(){
    display.value = display.value.slice(0,-1)
}
function equalHandler() {
    try {
        if (display.value) {
            display.value = eval(display.value)
        }
    } catch (error) {
        display.value = error.message
    }
}