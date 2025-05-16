import { generateReturnsArray } from "./src/investmentGoals";

const calculateButton = document.getElementById("button-calculate");

function renderProgression(event) {
  event.preventDefault();

  const startingAmount = Number(document.getElementById("starting-amount").value);
  const additionalApports = Number(document.getElementById("additional-apports").value);
  const timeAmount = Number(document.getElementById("time-amount").value);
  const timeAmountPeriod = document.getElementById("time-amount-period").value;
  const returnRate = Number(document.getElementById("return-rate").value);
  const returnRatePeriod = document.getElementById("return-rate-period").value;
  const taxRate = Number(document.getElementById("tax-rate").value);

  const returnsArray = generateReturnsArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    additionalApports,
    returnRate,
    returnRatePeriod
  );

  console.log(returnsArray);
}

calculateButton.addEventListener("submit", renderProgression);
