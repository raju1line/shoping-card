const soppingCover = document
  .getElementById("cover-incrise")
  .addEventListener("click", function () {
    clickHandler(true);
  });
const discriseCover = document
  .getElementById("discrise-cover")
  .addEventListener("click", function () {
    clickHandler(false);
  });

function clickHandler(incrise) {
  const coverContity = document.getElementById("cover-contity");
  const counttityNumber = parseInt(coverContity.value);
  let newNUmber = counttityNumber;
  if (incrise == true) {
    newNUmber = counttityNumber + 1;
  } else if (incrise == false && counttityNumber > 1) {
    newNUmber = counttityNumber - 1;
  }

  coverContity.value = newNUmber;
  const totalCover = newNUmber * 1212;
  document.getElementById("tota-value").innerText = totalCover;
}
