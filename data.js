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
        correctionFactor = 0.9607;
        break;
      case 30.5:
        correctionFactor = 0.9604;
        break;
      case 30.6:
        correctionFactor = 0.96;
        break;
      case 30.7:
        correctionFactor = 0.9597;
        break;
      case 30.8:
        correctionFactor = 0.9593;
        break;
      case 30.9:
        correctionFactor = 0.9589;
        break;
      default:
        correctionFactor = 1 + 0.00393 * (temperature - 20);
    }
  } else if (conductor === "aluminum") {
    switch (temperature) {
      case 30.0:
        correctionFactor = 0.9612;
        break;
      case 30.1:
        correctionFactor = 0.9609;
        break;
      case 30.2:
        correctionFactor = 0.9605;
        break;
      case 30.3:
        correctionFactor = 0.9601;
        break;
      case 30.4:
        correctionFactor = 0.9598;
        break;
      case 30.5:
        correctionFactor = 0.9594;
        break;
      case 30.6:
        correctionFactor = 0.959;
        break;
      case 30.7:
        correctionFactor = 0.9586;
        break;
      case 30.8:
        correctionFactor = 0.9583;
        break;
      case 30.9:
        correctionFactor = 0.9579;
        break;
      default:
        correctionFactor = 1 + 0.00403 * (temperature - 20);
    }
  } else {
    correctionFactor = 1;
  }

  document.getElementById("correction-factor").value =
    correctionFactor.toFixed(4);
}

function updateConductorSpec() {
  const crossSection = parseFloat(
    document.getElementById("cross-section").value
  );
  const conductor = document.getElementById("conductor").value;

  let conductorSpec;
  let conductorMaterial;

  if (conductor === "copper") {
    conductorMaterial = "CU";
    switch (crossSection) {
      case 0.5:
        conductorSpec = 36.0;
        break;
      case 0.75:
        conductorSpec = 24.5;
        break;
      case 1:
        conductorSpec = 18.1;
        break;
      case 1.5:
        conductorSpec = 12.1;
        break;
      case 2.5:
        conductorSpec = 7.41;
        break;
      case 4:
        conductorSpec = 4.61;
        break;
      case 6:
        conductorSpec = 3.08;
        break;
      case 10:
        conductorSpec = 1.83;
        break;
      case 16:
        conductorSpec = 1.15;
        break;
      case 25:
        conductorSpec = 0.727;
        break;
      case 35:
        conductorSpec = 0.524;
        break;
      case 50:
        conductorSpec = 0.387;
        break;
      case 70:
        conductorSpec = 0.268;
        break;
      case 95:
        conductorSpec = 0.193;
        break;
      case 107:
        conductorSpec = 0.167;
        break;
      case 120:
        conductorSpec = 0.153;
        break;
      case 150:
        conductorSpec = 0.124;
        break;
      case 185:
        conductorSpec = 0.0991;
        break;
      case 240:
        conductorSpec = 0.0754;
        break;
      case 300:
        conductorSpec = 0.0601;
        break;
      case 400:
        conductorSpec = 0.047;
        break;
      case 500:
        conductorSpec = 0.0366;
        break;
      case 630:
        conductorSpec = 0.0283;
        break;
      case 800:
        conductorSpec = 0.0221;
        break;
      case 1000:
        conductorSpec = 0.0176;
        break;
      case 1200:
        conductorSpec = 0.0151;
        break;
      case 1400:
        conductorSpec = 0.0129;
        break;
      case 1600:
        conductorSpec = 0.0113;
        break;
      case 1800:
        conductorSpec = 0.0101;
        break;
      case 2000:
        conductorSpec = 0.009;
        break;
      default:
        conductorSpec = "N/A";
    }
  } else if (conductor === "aluminum") {
    conductorMaterial = "AL";
    switch (crossSection) {
      case 0.5:
      case 0.75:
      case 1:
      case 1.5:
      case 2.5:
        conductorSpec = "-";
        break;
      case 4:
        conductorSpec = 7.41;
        break;
      case 6:
        conductorSpec = 4.61;
        break;
      case 10:
        conductorSpec = 3.08;
        break;
      case 16:
        conductorSpec = 1.91;
        break;
      case 25:
        conductorSpec = 1.2;
        break;
      case 35:
        conductorSpec = 0.868;
        break;
      case 50:
        conductorSpec = 0.641;
        break;
      case 70:
        conductorSpec = 0.443;
        break;
      case 95:
        conductorSpec = 0.32;
        break;
      case 107:
        conductorSpec = 0.264;
        break;
      case 120:
        conductorSpec = 0.253;
        break;
      case 150:
        conductorSpec = 0.206;
        break;
      case 185:
        conductorSpec = 0.164;
        break;
      case 240:
        conductorSpec = 0.125;
        break;
      case 300:
        conductorSpec = 0.1;
        break;
      case 400:
        conductorSpec = 0.0778;
        break;
      case 500:
        conductorSpec = 0.0605;
        break;
      case 630:
        conductorSpec = 0.0469;
        break;
      case 800:
        conductorSpec = 0.0367;
        break;
      case 1000:
        conductorSpec = 0.0291;
        break;
      case 1200:
        conductorSpec = 0.0247;
        break;
      case 1400:
        conductorSpec = 0.0212;
        break;
      case 1600:
        conductorSpec = 0.0186;
        break;
      case 1800:
        conductorSpec = 0.0165;
        break;
      case 2000:
        conductorSpec = 0.0149;
        break;
      default:
        conductorSpec = "N/A";
    }
  } else {
    conductorSpec = "N/A";
    conductorMaterial = "";
  }

  document.getElementById(
    "conductor-spec"
  ).value = `${conductorMaterial} ${crossSection} Spek Max: ${conductorSpec}`;
}

function calculate() {
  const reading = parseFloat(document.getElementById("reading").value);
  const length = parseFloat(document.getElementById("length").value);
  const correctionFactor = parseFloat(
    document.getElementById("correction-factor").value
  );
  const conductorSpec = parseFloat(
    document.getElementById("conductor-spec").value.split(" ").pop()
  );

  if (
    isNaN(reading) ||
    isNaN(length) ||
    isNaN(correctionFactor) ||
    isNaN(conductorSpec)
  ) {
    document.getElementById("result").textContent = "-";
    document.getElementById("validation-result").textContent = "-";
    document.getElementById("result").style.color = "blue";
    document.getElementById("validation-result").style.color = "blue";
    return;
  }

  const resistance = (reading / length) * correctionFactor;

  const resultElement = document.getElementById("result");
  resultElement.textContent = resistance.toFixed(4);

  const validationResult = document.getElementById("validation-result");
  if (resistance <= conductorSpec) {
    validationResult.textContent = "OK";
    validationResult.style.color = "green";
    validationResult.style.fontWeight = "bold";
    resultElement.style.color = "green";
  } else {
    validationResult.textContent = "FAIL";
    validationResult.style.color = "red";
    validationResult.style.fontWeight = "bold";
    resultElement.style.color = "red";
  }
}

function showSpec(spec) {
  alert("Menampilkan spesifikasi: " + spec);
}
