function getInputValue(inputParameter) {
  const input = document.getElementById(inputParameter);
  const inputAmountText = input.value;
  const inputAmount = parseFloat(inputAmountText);
  // input.value = "";
  return inputAmount;
}

function getInnerText(inputParameter) {
  const input = document.getElementById(inputParameter);
  const inputText = input.innerText;
  const previousInputAmount = parseFloat(inputText);
  return input;
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
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
    }

    // show error
    else {
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    }
  }
  // balance
  const balance = getInnerText("balance");

  // calculate balance
  if (incomeAmount >= 0 && typeof incomeAmount == "number") {
    if (foodAmount < 0 || rentAmount < 0 || clothesAmount < 0) {
      // show error
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "block";
    } else {
      // expense can't be greater than income
      if (parseFloat(totalCost.innerText) > incomeAmount) {
        // show error
        totalCost.innerText = 0;
        const positiveInt = document.getElementById("notify-costcan't-big");
        positiveInt.style.display = "block";
      } else {
        const Balance = incomeAmount - parseFloat(totalCost.innerText);
        balance.innerText = Balance.toFixed(2);
        const positiveInt = document.getElementById("notify-positve-int");
        positiveInt.style.display = "none";
        const expenseExceed = document.getElementById("notify-costcan't-big");
        expenseExceed.style.display = "none";
      }
    }
  }
  // show error
  else {
    const positiveInt = document.getElementById("notify-positve-int");
    positiveInt.style.display = "block";
  }
});
document.getElementById("save").addEventListener("click", function () {
  const saveAmount = getInputValue("saveInput");
  const incomeAmount = getInputValue("income");
  // get current savings
  const savingAmount = getInnerText("saving");
  if (saveAmount >= 0 && typeof saveAmount == "number") {
    const totalSavingAmount = (saveAmount * incomeAmount) / 100;
    savingAmount.innerText = totalSavingAmount;
    // calc remaining balance
    const remainAmount = getInnerText("remainBalance");
    // if saving greater than balance
    if (totalSavingAmount > balance.innerText) {
      savingAmount.innerText = 0;
      const savingBig = document.getElementById("notify-savingcan't-big");
      savingBig.style.display = "block";
    } else {
      const totalRemainBalance = balance.innerText - totalSavingAmount;
      remainAmount.innerText = totalRemainBalance;
      const positiveInt = document.getElementById("notify-positve-int");
      positiveInt.style.display = "none";
      const savingBig = document.getElementById("notify-savingcan't-big");
      savingBig.style.display = "none";
    }
  }
  // show error
  else {
    const positiveInt = document.getElementById("notify-positve-int");
    positiveInt.style.display = "block";
  }
});
