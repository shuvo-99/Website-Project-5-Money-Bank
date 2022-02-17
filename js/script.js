function getInputValue(inputParameter) {
  const input = document.getElementById(inputParameter);

  const inputAmountText = input.value;
  const inputAmount = parseFloat(inputAmountText);
  console.log(inputAmount);

  // input.value = "";

  return inputAmount;
}

document.getElementById("calc-button").addEventListener("click", function () {
  const incomeAmount = getInputValue("income");

  const foodAmount = getInputValue("foodCost");

  const rentAmount = getInputValue("rentCost");

  const clothesAmount = getInputValue("clothesCost");

  // get current total

  const totalCost = document.getElementById("totalCost");
  const totalCostText = totalCost.innerText;
  const previousTotalCost = parseFloat(totalCostText);

  if (isNaN(foodAmount) && isNaN(rentAmount) && isNaN(clothesAmount)) {
    totalCost.innerText = previousTotalCost + 0 + 0 + 0;
  } else if (isNaN(foodAmount) && isNaN(rentAmount)) {
    //    if value is positive
    if (clothesAmount >= 0 && incomeAmount >= 0) {
      totalCost.innerText = (previousTotalCost + 0 + 0 + clothesAmount).toFixed(
        2
      );
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }
  } else if (isNaN(foodAmount) && isNaN(clothesAmount)) {
    //    if value is positive
    if (rentAmount >= 0 && incomeAmount >= 0) {
      totalCost.innerText = (previousTotalCost + 0 + rentAmount + 0).toFixed(2);
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }
  } else if (isNaN(rentAmount) && isNaN(clothesAmount)) {
    //    if value is positive
    if (foodAmount >= 0 && incomeAmount >= 0) {
      totalCost.innerText = (previousTotalCost + foodAmount + 0 + 0).toFixed(2);
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }
  } else if (isNaN(foodAmount)) {
    //    if value is positive

    if (rentAmount >= 0 && clothesAmount >= 0 && incomeAmount >= 0) {
      totalCost.innerText = (
        previousTotalCost +
        0 +
        rentAmount +
        clothesAmount
      ).toFixed(2);
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }
  } else if (isNaN(rentAmount)) {
    //    if value is positive
    if (foodAmount >= 0 && clothesAmount >= 0 && incomeAmount >= 0) {
      totalCost.innerText = (
        previousTotalCost +
        foodAmount +
        0 +
        clothesAmount
      ).toFixed(2);
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }
  } else if (isNaN(clothesAmount)) {
    // if value is positive
    if (foodAmount >= 0 && rentAmount >= 0 && incomeAmount >= 0) {
      totalCost.innerText = (
        previousTotalCost +
        foodAmount +
        rentAmount +
        0
      ).toFixed(2);
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }
  } else {
    //    if value is positive
    if (
      foodAmount >= 0 &&
      rentAmount >= 0 &&
      clothesAmount >= 0 &&
      incomeAmount >= 0
    ) {
      totalCost.innerText = (
        previousTotalCost +
        foodAmount +
        rentAmount +
        clothesAmount
      ).toFixed(2);
      // console.log(totalCost.innerText);
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }
  }
});
