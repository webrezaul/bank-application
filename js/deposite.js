document.getElementById('btn-deposit').addEventListener('click', function () {

    // console.log('button desposit clicked');
    const depositField = document.getElementById('btn-deposit-field');
    const newDepositAmountString = depositField.value;
    // console.log(newDepositAmountString);
    const depositAmount = parseFloat(newDepositAmountString)
    // console.log(depositAmount)
    depositField.value = '';

    // step-4
    const depositTotalElement = document.getElementById('deposite-total');
    const prevousDepositeTotalString = depositTotalElement.InnerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

})