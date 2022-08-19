function updateCaseNumber(isIncreasing){
    const caseNumberField = document.getElementById('case-number-field');
    const previousCaseNumber = parseInt(caseNumberField.value);
    let newCaseNumber;
    if(isIncreasing === true){
        newCaseNumber = previousCaseNumber +1;
    }
    else{
        newCaseNumber = previousCaseNumber -1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCasePrice(newCaseNumber){
    const totalCasePrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    console.log(totalCasePrice);
    caseTotalElement.innerText = totalCasePrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCasePrice(newCaseNumber);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber= updateCaseNumber(false);
    updateCasePrice(newCaseNumber);
    calculateSubTotal();
})