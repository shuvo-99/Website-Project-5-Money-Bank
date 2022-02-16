document.getElementById('calc-button').addEventListener('click',function(){
    const foodInput = document.getElementById('foodCost');
    const foodAmount = foodInput.value;
    console.log(foodAmount);

    // get current total
    const totalCost = document.getElementById('totalCost');
    const totalCostText = totalCost.innerText;
    totalCost.innerText = foodAmount;
    console.log(totalCostText);

    // clear input field
    foodInput.value = '';


})