const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('#gridSliderValue');

slider.oninput = function() {
    sliderValue.textContent = `Value: ${slider.value}`;
}

const gridContainer = document.querySelector('.gridContainer');

function addGridDivs() {
    
}