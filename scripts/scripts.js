const slider = document.querySelector('#gridSlider');
const sliderValueText = document.querySelector('#gridSliderText');

slider.oninput = function() {
    const gridContainer = document.querySelector('.gridContainer');
    const gridDivisions =  slider.value ** 2; 
    sliderValueText.textContent = `GRID SIZE: ${slider.value}`;
    gridContainer.style.setProperty('grid-template-columns', `repeat(
            ${slider.value}, minmax(auto, auto))`);
    
    clearGridContainer();

    for (let i = 0; i < gridDivisions; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        gridContainer.appendChild(gridDiv);
    }
    triggerMouse();
}

function clear() {
    const clearButton = document.querySelector('#clearButton');
    clearButton.addEventListener('click', e => {
        slider.oninput();
    });
}

function clearGridContainer() {
    const gridContainer = document.querySelector('.gridContainer');
    const allGridDivs = document.querySelectorAll('.gridDiv');

    allGridDivs.forEach((div) => {
        gridContainer.removeChild(div);
    });

}

function changeColor() {
    const mouseTarget = document.querySelectorAll('.gridDiv');
    mouseTarget.forEach((div) => {
        div.addEventListener('mouseenter', e => {
            div.style.backgroundColor = colorSwatch.style.getPropertyValue('background-color');
        });
    });
}

function triggerMouse() {
    const mouseTarget = document.querySelectorAll('.gridDiv');
    mouseTarget.forEach((div) => {
        div.addEventListener('mousedown', e => {
            changeColor();
        })
    })
}

triggerMouse();

/* function colorPicker(); { */
    const colorSwatch = document.querySelector('.colorSwatch');
    const redValue = document.querySelector('#redSlider');
    const greenValue = document.querySelector('#greenSlider');
    const blueValue = document.querySelector('#blueSlider');
/* } */

redValue.oninput = function() {
    colorSwatch.style.setProperty('background-color', `rgb(${redValue.value}, 
            ${greenValue.value}, ${blueValue.value})`);
}

greenValue.oninput = function() {
    colorSwatch.style.setProperty('background-color', `rgb(${redValue.value}, 
            ${greenValue.value}, ${blueValue.value})`);
}

blueValue.oninput = function() {
    colorSwatch.style.setProperty('background-color', `rgb(${redValue.value}, 
            ${greenValue.value}, ${blueValue.value})`);
}
clear();

// see if you can figure out mousedown + mouseenter
// 

