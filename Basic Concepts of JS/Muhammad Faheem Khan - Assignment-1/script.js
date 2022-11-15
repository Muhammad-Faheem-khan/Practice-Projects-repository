text = document.querySelector('innerDiv')


function handleClick(){
var xhttp = new XMLHttpRequest()
xhttp.onload = function(){
    text.innerHTML = this.responseText
}
xhttp.open('GET', 'url')
xhttp.send()
}