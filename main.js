const inputCelis = document.getElementById('celsius')
const inputFarh = document.getElementById('fahrenheit')

function toCelis() {
    let output = (parseFloat(inputCelis.value) * 9 / 5) + 32;
    inputFarh.value = parseFloat(output.toFixed(2))
}