function getInputValue(inputCost) {
  const input = document.getElementById(inputCost);

  const inputAmountText = input.value;
  const inputAmount = parseFloat(inputAmountText);
  console.log(inputAmount);
  // if (isNaN(inputAmount)){
  // if (typeof(inputAmount)!='number'){

  //     console.log('no')
  //     const Integer = document.getElementById("notify-int");
  //     Integer.style.display = "block";

  // }
  // else if(typeof(inputAmount)=='number'){

  //     input.value = "";

  //     return inputAmount;
  // }
  if (inputAmount >= 0) {
    input.value = "";

    return inputAmount;
  } else {
    console.log("no");
    const positiveInt = document.getElementById("notify-positve-int");
    positiveInt.style.display = "block";
  }
  // input.value = "";

  // return inputAmount;
}

// function currentTotal() {
//   const totalCost = document.getElementById("totalCost");
//   const totalCostText = totalCost.innerText;
//   const previousTotalCost = parseFloat(totalCostText);
// }

document.getElementById("calc-button").addEventListener("click", function () {
  // const foodInput = document.getElementById('foodCost');
  // const foodAmountText = foodInput.value;
  // const foodAmount = parseFloat(foodAmountText)
  // console.log(foodAmount);
  const foodAmount = getInputValue("foodCost");

  // const rentInput = document.getElementById('rentCost');
  // const rentAmountText = rentInput.value;
  // const rentAmount = parseFloat(rentAmountText)
  // console.log(rentAmount);
  const rentAmount = getInputValue("rentCost");

  // const clothesInput = document.getElementById('clothesCost');
  // const clothesAmountText = clothesInput.value;
  // const clothesAmount = parseFloat(clothesAmountText)
  // console.log(clothesAmount);

  const clothesAmount = getInputValue("clothesCost");

  // get current total

  const totalCost = document.getElementById("totalCost");
  const totalCostText = totalCost.innerText;
  const previousTotalCost = parseFloat(totalCostText);

  if (isNaN(foodAmount) && isNaN(rentAmount) && isNaN(clothesAmount)) {
    totalCost.innerText = previousTotalCost + 0 + 0 + 0;
  } else if (isNaN(foodAmount) && isNaN(rentAmount)) {
    //   if(isNaN(clothesAmount)){

    //     console.log('no')
    //     const Integer = document.getElementById("notify-int");
    //     Integer.style.display = "block";

    //   }
    //   else {
    //       console.log('yes')
    // if value is positive
    // if (clothesAmount >= 0) {
    //     totalCost.innerText = previousTotalCost + 0 + 0 + clothesAmount;
    //     const positiveInt = document.getElementById("notify-positve-int");
    //     positiveInt.style.display = "none";
    // }
    totalCost.innerText = previousTotalCost + 0 + 0 + clothesAmount;
    const positiveInt = document.getElementById("notify-positve-int");
    positiveInt.style.display = "none";

    // show error
    // else {
    //   const positiveInt = document.getElementById("notify-positve-int");
    //   positiveInt.style.display = "block";
    // }

    // totalCost.innerText = previousTotalCost + 0 + 0 + clothesAmount;
  } else if (isNaN(foodAmount) && isNaN(clothesAmount)) {
    // if value is positive
    if (rentAmount >= 0) {
      totalCost.innerText = previousTotalCost + 0 + rentAmount + 0;
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }
    // totalCost.innerText = previousTotalCost + 0 + rentAmount + 0;
  } else if (isNaN(rentAmount) && isNaN(clothesAmount)) {
    // if value is positive
    if (foodAmount >= 0) {
      totalCost.innerText = previousTotalCost + foodAmount + 0 + 0;
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }
    // totalCost.innerText = previousTotalCost + foodAmount + 0 + 0;
  } else if (isNaN(foodAmount)) {
    // if value is positive
    if (rentAmount >= 0 && clothesAmount >= 0) {
      totalCost.innerText = previousTotalCost + 0 + rentAmount + clothesAmount;
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }
    // totalCost.innerText = previousTotalCost + 0 + rentAmount + clothesAmount;
  } else if (isNaN(rentAmount)) {
    // if value is positive
    if (foodAmount >= 0 && clothesAmount >= 0) {
      totalCost.innerText = previousTotalCost + foodAmount + 0 + clothesAmount;
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }

    // totalCost.innerText = previousTotalCost + foodAmount + 0 + clothesAmount;
  } else if (isNaN(clothesAmount)) {
    // if value is positive
    if (foodAmount >= 0 && rentAmount >= 0) {
      totalCost.innerText = previousTotalCost + foodAmount + rentAmount + 0;
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }
    // totalCost.innerText = previousTotalCost + foodAmount + rentAmount + 0;
  } else {
    // if value is positive
    if (foodAmount >= 0 && rentAmount >= 0 && clothesAmount >= 0) {
      totalCost.innerText =
        previousTotalCost + foodAmount + rentAmount + clothesAmount;
      // console.log(totalCost.innerText);
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }

    // totalCost.innerText =
    //   previousTotalCost + foodAmount + rentAmount + clothesAmount;
    // console.log(totalCost.innerText);
  }

  // console.log(totalCostText);

  // clear input field

  // rentInput.value = '';
  // clothesInput.value = '';
});
