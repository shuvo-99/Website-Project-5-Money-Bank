document.getElementById('calc-button').addEventListener('click',function(){
    const foodInput = document.getElementById('foodCost');
    const foodAmountText = foodInput.value;
    const foodAmount = parseFloat(foodAmountText)
    console.log(foodAmount);

    // get current total
    const totalCost = document.getElementById('totalCost');
    const totalCostText = totalCost.innerText;
    const previousTotalCost = parseFloat(totalCostText); 
    totalCost.innerText = previousTotalCost + foodAmount;
    // console.log(totalCostText);

    // clear input field
    foodInput.value = '';


})