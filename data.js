document.addEventListener("DOMContentLoaded", function () {
  updateCorrectionFactor();
  updateConductorSpec();
});

function updateCorrectionFactor() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const conductor = document.getElementById("conductor").value;

  let correctionFactor;

  if (conductor === "copper") {
    switch (temperature) {
      case 30.0:
        correctionFactor = 0.9622;
        break;
      case 30.1:
        correctionFactor = 0.9618;
        break;
      case 30.2:
        correctionFactor = 0.9615;
        break;
      case 30.3:
        correctionFactor = 0.9611;
        break;
      case 30.4:
