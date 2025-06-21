const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
  display.value = " " 
}

function calculate() {
  try {
    let expression = display.value; 
    expression = expression.replace(/\^/g, "**");
    display.value = eval(expression);
  }
  catch(error) {
     display.value = "Error";
  }
}

let isOn = false;
display.value = "OFF";
powerButton.style.backgroundColor = "green";

function togglePower() {
  const buttons = document.querySelectorAll("#keys button");
  const powerButton = document.getElementById("powerButton");
  const display = document.getElementById("display");  // <--- add this line

  if(isOn) {
    buttons.forEach(btn => btn.disabled = true);
    display.value = "OFF";
    powerButton.textContent = "ON";
    powerButton.style.backgroundColor = "green";
    powerButton.style.color = "white";
    isOn = false; 
  } else {
    buttons.forEach(btn => btn.disabled = false);
    display.value = "";
    powerButton.textContent = "OFF";
    powerButton.style.backgroundColor = "red";
    powerButton.style.color = "white";
    isOn = true;
  }
}

  
