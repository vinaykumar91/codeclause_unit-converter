

function convertLength() {
  var inputValue = parseFloat(document.getElementById('lengthInputValue').value);
  var inputUnit = document.getElementById('lengthInputUnit').value;
  var outputUnit = document.getElementById('lengthOutputUnit').value;
  var result = document.getElementById('lengthResult');
  
  if (inputUnit === 'cm' && outputUnit === 'inch') {
    result.textContent = (inputValue / 2.54).toFixed(2) + ' inch';
  } 
  else if (inputUnit === 'cm' && outputUnit === 'm') {
    result.textContent = (inputValue / 100 ).toFixed(2) + ' m';
  } 
  else if (inputUnit === 'cm' && outputUnit === 'km') {
    result.textContent = (inputValue / 1e+5 ).toFixed(5) + ' km';
  } 
  else if (inputUnit === 'inch' && outputUnit === 'cm') {
    result.textContent = (inputValue * 2.54).toFixed(2) + ' cm';
  } 
  else if (inputUnit === 'm' && outputUnit === 'cm') {
    result.textContent = (inputValue *100 ).toFixed(2) + ' cm';
  } 
  else if (inputUnit === 'km' && outputUnit === 'cm') {
    result.textContent = (inputValue * 1e+5 ).toFixed(2) + ' cm';
  }

  else {
    result.textContent = 'Invalid conversion';
  }
}

function convertWeight() {
  var inputValue = parseFloat(document.getElementById('weightInputValue').value);
  var inputUnit = document.getElementById('weightInputUnit').value;
  var outputUnit = document.getElementById('weightOutputUnit').value;
  var result = document.getElementById('weightResult');
  
  if (inputUnit === 'kg' && outputUnit === 'lb') {
    result.textContent = (inputValue * 2.20462).toFixed(2) + ' lb';
  } 
  else if (inputUnit === 'kg' && outputUnit === 'gram') {
    result.textContent = (inputValue * 1000).toFixed(2) + ' gram';
  } 
  else if (inputUnit === 'kg' && outputUnit === 'mg') {
    result.textContent = (inputValue * 1e+6).toFixed(2) + ' mg';
  } 
  else if (inputUnit === 'lb' && outputUnit === 'kg') {
    result.textContent = (inputValue * 0.453592).toFixed(2) + ' kg';
  } 
 

  
  else {
    result.textContent = 'Invalid conversion';
  }
}

function convertTemperature() {
  var inputValue = parseFloat(document.getElementById('tempInputValue').value);
  var inputUnit = document.getElementById('tempInputUnit').value;
  var outputUnit = document.getElementById('tempOutputUnit').value;
  var result = document.getElementById('tempResult');
  
  if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
    result.textContent = ((inputValue * 9/5) + 32).toFixed(2) + ' °F';
  } 
  else if (inputUnit === 'celsius' && outputUnit === 'Kelvin') {
    result.textContent = (inputValue+273.15).toFixed(2) + ' °k';
  }
  else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
    result.textContent = ((inputValue - 32) * 5/9).toFixed(2) + ' °C';
  } 
  else if (inputUnit === 'Kelvin' && outputUnit === 'celsius') {
    result.textContent = (inputValue-273.15).toFixed(2) + ' °C';
  }
  else {
    result.textContent = 'Invalid conversion';
  }
}