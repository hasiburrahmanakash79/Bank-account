document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-amount')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // console.log('newWithdrawAmount')
    const withdrawAmount = document.getElementById('withdraw-total')
    const previousWithdrawString = withdrawAmount.innerText
    const previousWithdraw = parseFloat(previousWithdrawString)
    const totalWithdraw = newWithdrawAmount + previousWithdraw
    withdrawAmount.innerText = totalWithdraw

    const myBalanceTotal = document.getElementById('balance-total')
    const totalBalanceString = myBalanceTotal.innerText
    const totalBalance = parseFloat(totalBalanceString)
    const currentTotalBalance = totalBalance - newWithdrawAmount
    myBalanceTotal.innerText = currentTotalBalance

    withdrawField.value = '';
})