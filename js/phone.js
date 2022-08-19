function updatePhoneNumber(isIncreasing){
    const phoneNumberField = document.getElementById('phone-number-field');
    const previousPhoneNumber = parseInt(phoneNumberField.value);
    let newPhoneNumber;
    if(isIncreasing === true){
        newPhoneNumber = previousPhoneNumber +1;
    }
    else{
        newPhoneNumber = previousPhoneNumber -1;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhonePrice(newPhoneNumber){
    const totalPhonePrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    console.log(totalPhonePrice);
    phoneTotalElement.innerText = totalPhonePrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhonePrice(newPhoneNumber);
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber= updatePhoneNumber(false);
    updatePhonePrice(newPhoneNumber);
})