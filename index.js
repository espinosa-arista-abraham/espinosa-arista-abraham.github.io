var button = document.getElementById('execute');
var inputFuction = document.getElementById('inputFunction');
var inputValue = document.getElementById('inputValue');
var result = document.getElementById('result');
var copyButton = document.getElementById('copy');

button.addEventListener('click', execute);

function execute() {
    var cadena = `${inputFuction.value}("` + inputValue.value + `") `;
    result.innerText = eval(cadena);
}

copyButton.addEventListener('click', copyToClipboard);

function copyToClipboard() {
    var tempInput = document.createElement("input");
    tempInput.value = result.innerText;

    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand('copy');

    //alert("Copied: " + tempInput.value);
    document.body.removeChild(tempInput);
}
