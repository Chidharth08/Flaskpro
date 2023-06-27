var slider = document.getElementById("myRange");
var fahrenheitOutput = document.getElementById("fahrenheit");
var celsiusOutput = document.getElementById("celsius");

fahrenheitOutput.innerHTML = slider.value + "&deg; F";
celsiusOutput.innerHTML = ((Number(slider.value) - 32) * (5/9)).toFixed(0) + "&deg; C";

slider.oninput = function () {
    fahrenheitOutput.innerHTML = this.value + "&deg; F";
    celsiusOutput.innerHTML = ((Number(this.value) - 32) * (5/9)).toFixed(0) + "&deg; C";
};
