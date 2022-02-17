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
});
