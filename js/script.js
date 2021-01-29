document.getElementById('phone-increase').addEventListener('click', function () {
    handleProductChange('phone', 1219, 1);
})

document.getElementById('phone-decrease').addEventListener('click', function () {
    handleProductChange('phone', 1219, -1);
})

document.getElementById('case-increase').addEventListener('click', function () {
    handleProductChange('case', 59, 1);
})

document.getElementById('case-decrease').addEventListener('click', function () {
    handleProductChange('case', 59, -1);
})

function handleProductChange(product, unitPrice, add) {
    const productInput = document.getElementById(product + '-count');
    const productNewCount = parseInt(productInput.value) + add;
    if (productNewCount <= 0) return
    productInput.value = productNewCount;
    const productTotal = productNewCount * unitPrice;
    document.getElementById(product + '-total').innerText = productTotal;

    calculateTotal()
}

function calculateTotal() {
    const phoneTotal = parseFloat(document.getElementById('phone-total').innerText);
    const caseTotal = parseFloat(document.getElementById('case-total').innerText);
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');

    subtotal.innerText = phoneTotal + caseTotal;
    total.innerText = phoneTotal + caseTotal;
}

// TEST
