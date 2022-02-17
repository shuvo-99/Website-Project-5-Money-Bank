document.getElementById("calc-button").addEventListener("click", function () {
  const foodInput = document.getElementById("foodCost");
  const foodAmountText = foodInput.value;
  const foodAmount = parseFloat(foodAmountText);
  console.log(foodAmount);

  const rentInput = document.getElementById("rentCost");
  const rentAmountText = rentInput.value;
  const rentAmount = parseFloat(rentAmountText);
  console.log(rentAmount);

  const clothesInput = document.getElementById("clothesCost");
  const clothesAmountText = clothesInput.value;
  const clothesAmount = parseFloat(clothesAmountText);
  console.log(clothesAmount);
});
