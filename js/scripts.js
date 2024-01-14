"use strict";

var firstPage = document.querySelector(".page-1");
var secondPage = document.querySelector(".page-2");
var form = document.getElementById("form");

var heightInput = document.getElementById("heightInput");
var weightInput = document.getElementById("weightInput");
var IMCValue = document.getElementById("IMCValue");
var classification = document.getElementById("classification");

var IMCBtn = document.getElementById("btnIMC");
var quitBtn = document.getElementById("quitBtn");

form.addEventListener("submit", (e) => {
  // Impede o formulário de recarregar a página
  e.preventDefault();
});

const showIMC = () => {
  if (heightInput.value === "" || weightInput.value === "") {
    // Modal
    let modalAlert = document.getElementById("modalAlert");
    modalAlert.style.opacity = "1";
    modalAlert.style.transform = "scale(1.2)";

    setTimeout(() => {
      modalAlert.style.transform = "scale(1.0)";
    }, 300);

    setTimeout(() => {
      modalAlert.style.opacity = "0";
    }, 2000);

    return;
  }

  // Transformando em número flutuante
  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value.replace(",", "."));

  if (isNaN(height) || isNaN(weight)) {
    return;
  }
  height = height / 100; // transformando de centimetro para metro
  // Fazendo o cálculo do IMC
  let result = weight / (height * height);

  // Classificações
  switch (true) {
    case result < 18.5:
      classification.textContent = "Magresa";
      break;
    case result >= 18.5 && result < 24.9:
      classification.textContent = "Normal";
      break;
    case result >= 25 && result < 29.9:
      classification.textContent = "Sobrepeso";
      break;
    case result >= 30 && result < 39.9:
      classification.textContent = "Obesidade";
      break;
    default:
      classification.textContent = "Obesidade Grave";
  }

  firstPage.style.display = "none";
  secondPage.style.display = "flex";
  IMCValue.textContent = result.toFixed(2);
};

// Voltar para a primeira página
const backToFirstPage = () => {
  firstPage.style.display = "flex";
  secondPage.style.display = "none";
};

btnIMC.addEventListener("click", showIMC);
quitBtn.addEventListener("click", backToFirstPage);


