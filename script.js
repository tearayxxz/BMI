const bmiForm = document.getElementById("bmiForm");

bmiForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const heightInput = document.getElementById("Height");
  const weightInput = document.getElementById("Weight");
  const heightError = document.getElementById("heightError");
  const weightError = document.getElementById("weightError");
  const heightCm = parseFloat(heightInput.value);
  const weightKg = parseFloat(weightInput.value);

  heightError.textContent = "";
  weightError.textContent = "";

  let hasError = false;
  if (isNaN(heightCm) || heightCm <= 0) {
    heightError.textContent = "Please enter a height.";
    hasError = true;
  }

  if (heightCm < 30 || heightCm > 300) {
    heightError.textContent =
      "Please enter a valid height between 30 cm and 300 cm.";
    hasError = true;
  }

  if (isNaN(weightKg) || weightKg <= 0) {
    weightError.textContent = "Please enter a weight.";
    hasError = true;
  }

  if (weightKg < 1 || weightKg > 500) {
    weightError.textContent =
      "Please enter a valid weight between 1 kg and 500 kg.";
    hasError = true;
  }

  if (hasError) {
    return;
  }

  const heightM = heightCm / 100;

  const bmi = weightKg / (heightM * heightM);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = bmi.toFixed(2);

  let category = "";
  let risk = "";

  if (bmi < 18.5) {
    category = "Underweight / Thin";
    risk = "Higher than average";
  } else if (bmi >= 18.5 && bmi <= 22.9) {
    category = "Normal (Healthy)";
    risk = "Same as average";
  } else if (bmi >= 23 && bmi <= 24.9) {
    category = "Overweight / Obesity Class 1";
    risk = "Risk Level 1";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Obese / Obesity Class 2";
    risk = "Risk Level 2";
  } else if (bmi > 30) {
    category = "Severely Obese / Obesity Class 3";
    risk = "Risk Level 3";
  }

  document.getElementById("category").innerText = `Category: ${category}`;
  document.getElementById("risk").innerText = `Risk Level: ${risk}`;
});
