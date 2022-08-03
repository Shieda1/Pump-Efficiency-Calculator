// https://calculator.swiftutors.com/pump-efficiency-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pumpEfficiencyRadio = document.getElementById('pumpEfficiencyRadio');
const waterHorsepowerRadio = document.getElementById('waterHorsepowerRadio');
const brakeHorsepowerRadio = document.getElementById('brakeHorsepowerRadio');

let pumpEfficiency;
let waterHorsepower = v1;
let brakeHorsepower = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

pumpEfficiencyRadio.addEventListener('click', function() {
  variable1.textContent = '(WHP) Water Horsepower (HP)';
  variable2.textContent = '(BHP) Brake Horsepower (HP)';
  waterHorsepower = v1;
  brakeHorsepower = v2;
  result.textContent = '';
});

waterHorsepowerRadio.addEventListener('click', function() {
  variable1.textContent = '(n) Pump Efficiency (%)';
  variable2.textContent = '(BHP) Brake Horsepower (HP)';
  pumpEfficiency = v1;
  brakeHorsepower = v2;
  result.textContent = '';
});

brakeHorsepowerRadio.addEventListener('click', function() {
  variable1.textContent = '(n) Pump Efficiency (%)';
  variable2.textContent = '(WHP) Water Horsepower (HP)';
  pumpEfficiency = v1;
  waterHorsepower = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pumpEfficiencyRadio.checked)
    result.textContent = `Pump Efficiency = ${computePumpEfficiency().toFixed(2)} %`;

  else if(waterHorsepowerRadio.checked)
    result.textContent = `Water Horsepower = ${computeWaterHorsepower().toFixed(2)} HP`;

  else if(brakeHorsepowerRadio.checked)
    result.textContent = `Brake Horsepower = ${computeBrakeHorsepower().toFixed(2)} HP`;
})

// calculation

function computePumpEfficiency() {
  return (Number(waterHorsepower.value) / Number(brakeHorsepower.value)) * 100;
}

function computeWaterHorsepower() {
  return (Number(pumpEfficiency.value) / 100) * Number(brakeHorsepower.value);
}

function computeBrakeHorsepower() {
  return Number(waterHorsepower.value) / (Number(pumpEfficiency.value) / 100);
}