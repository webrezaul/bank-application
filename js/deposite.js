
    // Step:01
  
  document.getElementById('btn-deposit').addEventListener('click', function () {

    // console.log('button desposit clicked');

    // step:2
    const depositField = document.getElementById('btn-deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    // console.lo g(newDepositAmountString);

    // console.log(depositAmount)

    // step:3
    depositField.value = '';

    // step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const prevousDepositeTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(prevousDepositeTotalString);

    // step:5

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // setep:6
    const blanceTotalElement = document.getElementById('blance-total');
    const blanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat (blanceTotalString);

    // step:7

    const newBlanceTotal = previousBlanceTotal + newDepositTotal;
    blanceTotalElement.innerText = newBlanceTotal;



})