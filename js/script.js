function getInputValue(){
    const foodInput = document.getElementById('foodCost');
    const foodAmountText = foodInput.value;
    const foodAmount = parseFloat(foodAmountText)
    foodInput.value = '';
    return foodAmount;

}


document.getElementById('calc-button').addEventListener('click',function(){
    // const foodInput = document.getElementById('foodCost');
    // const foodAmountText = foodInput.value;
    // const foodAmount = parseFloat(foodAmountText)
    // console.log(foodAmount);
    const foodAmount = getInputValue();

    const rentInput = document.getElementById('rentCost');
    const rentAmountText = rentInput.value;
    const rentAmount = parseFloat(rentAmountText)
    console.log(rentAmount);
    
    const clothesInput = document.getElementById('clothesCost');
    const clothesAmountText = clothesInput.value;
    const clothesAmount = parseFloat(clothesAmountText)
    console.log(clothesAmount);

    // get current total
    const totalCost = document.getElementById('totalCost');
    const totalCostText = totalCost.innerText;
    const previousTotalCost = parseFloat(totalCostText);

    if(isNaN(foodAmount) && isNaN(rentAmount) && isNaN(clothesAmount)){
        totalCost.innerText = previousTotalCost + 0 + 0 + 0 ;
    }  
    else if(isNaN(foodAmount) && isNaN(rentAmount)) {
        totalCost.innerText = previousTotalCost + 0 + 0 + clothesAmount ;
    }  
    else if(isNaN(foodAmount) && isNaN(clothesAmount)){
        totalCost.innerText = previousTotalCost + 0 + rentAmount + 0 ;
    }  
    else if(isNaN(rentAmount) && isNaN(clothesAmount)){
        totalCost.innerText = previousTotalCost + foodAmount + 0 + 0 ;
    } 
    
    else if (isNaN(foodAmount)){
        totalCost.innerText = previousTotalCost + 0 + rentAmount + clothesAmount;

    }
    else if(isNaN(rentAmount)){
        totalCost.innerText = previousTotalCost + foodAmount + 0 + clothesAmount ;
    }  
    else if(isNaN(clothesAmount)){
        totalCost.innerText = previousTotalCost + foodAmount + rentAmount + 0 ;
    }

    else{
        totalCost.innerText = previousTotalCost + foodAmount + rentAmount + clothesAmount ;
        console.log(totalCost.innerText);
    }
    
    // console.log(totalCostText);

    // clear input field
    
    rentInput.value = '';
    clothesInput.value = '';


})
// document.getElementById('calc-button').addEventListener('click',function(){
//     const rentInput = document.getElementById('rentCost');
//     const rentAmountText = rentInput.value;
//     const rentAmount = parseFloat(rentAmountText)
//     console.log(rentAmount);

//     // get current total
//     const totalCost = document.getElementById('totalCost');
//     const totalCostText = totalCost.innerText;
//     const previousTotalCost = parseFloat(totalCostText); 
//     totalCost.innerText = foodAmount + rentAmount;
//     // console.log(totalCostText);

//     // clear input field
//     rentInput.value = '';


// })