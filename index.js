var button = document.getElementById('execute');
var inputFuction = document.getElementById('inputFunction');
var inputValue = document.getElementById('inputValue');
var result = document.getElementById('result');
var inlS = document.getElementById('inline-script');

button.addEventListener('click', execute);

function execute() {
    var cadena = `${inputFuction.value}("` + inputValue.value + `") `;
    result.innerText = eval(cadena);
}
