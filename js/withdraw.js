/* 
step:01 Add event handler with the withdraw button

step:02 Get the withdraw Amount

step:03 Clear input field

step:04 Get previous Withdraw Total

step:05 calculate withdraw Total Amount & set it on withdraw element

step: 06 Get Previous Blance

*/
// step:01 
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step:02
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    // step:03

    withdrawField.value = '';

    // step:04 

    const withdrawTotalElement = document.getElementById('Withdraw-amount');
    
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousTotalWithdraw = parseFloat(previousWithdrawTotalString);

    // step:05

    const newWithdrawAmountTotal = previousTotalWithdraw + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawAmountTotal;

     // step:06

     const newBlanceTotalElement = document.getElementById('blance-total')
     const previousBlanceTotalString = newBlanceTotalElement.innerText;
     const previousBlanceTotal = parseFloat(previousBlanceTotalString);

    // step:07

    const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
    newBlanceTotalElement.innerText = newBlanceTotal;

})