let total = 0;
function handleCLickBtn(terget) {
    const itemContainer = document.getElementById('selected-items')
    const itemName = terget?.parentNode?.childNodes[3]?.innerText;
    const li = document.createElement('li')
    li.innerText = itemName;
    itemContainer.appendChild(li)
    const price = terget?.parentNode?.childNodes[5]?.innerText.split(" ")[1];
    
    total = parseFloat(total) + parseFloat(price)
    document.getElementById('total').innerText = total.toFixed(2) + "TK";
    clickButtons()

}
function calculateDiscount() {
    const inputBox = document.getElementById('inputBox');
    var inputValue = parseFloat(inputBox.value);
    inputBox.value = ''
    var disCountProductTage = inputValue;
    
    var disCountPrice = (total * (100 - disCountProductTage)) / 100;
    var resultTage = document.getElementById('result');
    resultTage.innerHTML = disCountPrice + 'Tk'
   
    var discountBlance = document.getElementById('discountedBlance')
    var fixtBalance = total - disCountPrice
    discountBlance.innerHTML = fixtBalance.toFixed(2) + 'Tk'
    clickButtons()
}

let enabled = false
document.getElementById('myButton').addEventListener('click', function () {
    clickButtons()
})
document.getElementById('applyButton').addEventListener('click', function () {
    clickButtons()
})
function clickButtons() {
    const buttons = document.getElementById('applyButton')
    if (total > 199) {
        buttons.removeAttribute("disabled");
    } else {
        buttons.setAttribute("disabled", true);
    }
    const button = document.getElementById("myButton");
    if (total > 0) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", true);
    }

}