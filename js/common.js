function getTextElementbyId(element){
    return parseInt(document.getElementById(element).innerText);
}

function setTextElementById(element, value){
    document.getElementById(element).innerText = value;
}

function calculateSubTotal(){
    const currentSubTotal = getTextElementbyId('phone-total') + getTextElementbyId('case-total');
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
    getTextElementbyId('sub-total', currentSubTotal);

    const taxAmountString = (currentSubTotal * 0.07).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    console.log(taxAmount);
    setTextElementById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalAmount);
}