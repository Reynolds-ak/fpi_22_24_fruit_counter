function countFruit() {
  const days = Number.parseInt(document.getElementById("days").value);
  let fruits = Number.parseInt(document.getElementById("fruits").value);
  let totalFruits = 0,
    thirdDayFruits = "No 3rd day",
    fifthDayFruits = "No 5th day";

  for (let i = 0; i < days; i++) {
    totalFruits += fruits;
    if (i == 2)
      thirdDayFruits = "Total no. of fruits on 3rd day: " + totalFruits;
    if (i == 4) {
      fifthDayFruits = "Total no. of fruits on 5th day: " + totalFruits;
    }
  }
  // totalFruits = "Total no. of fruits on last day: " + totalFruits;
  document.getElementById("result").innerText =
    thirdDayFruits + "\n" + fifthDayFruits;
  // + "\n" + totalFruits;
}
