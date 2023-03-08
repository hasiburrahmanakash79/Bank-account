document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value=''
    
    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const totalDeposit = previousDepositTotal + newDepositAmount;
    depositTotalAmount.innerText = totalDeposit;
    
    
    const myBalanceTotal = document.getElementById('balance-total')
    const previousBalanceTotalString = myBalanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const totalBalance = previousBalanceTotal + newDepositAmount
    myBalanceTotal.innerText = totalBalance;

    depositField.value = '';
}) 