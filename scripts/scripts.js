const sliderValueText = document.querySelector('#gridSliderText');
const gridContainer = document.querySelector('#gridContainer');
const colorSwatch = document.querySelector('.colorSwatch');
const slider = document.querySelector('#gridSlider');
const redValue = document.querySelector('#redSlider');
const greenValue = document.querySelector('#greenSlider');
const blueValue = document.querySelector('#blueSlider');

function listen() {
    const clearButton = document.querySelector('#clearButton');
    const blackButton = document.querySelector('#blackButton');
    const multiButton = document.querySelector('#multiButton');;

    clearButton.addEventListener('click', event => {
        gridContainer.removeEventListener('mouseover', draw);
        gridContainer.removeEventListener('mouseover', drawMulti);
        gridContainer.removeEventListener('mouseover', drawBlack);
        clear();
    });
    blackButton.addEventListener('click', event => {
        gridContainer.addEventListener('click', e => {
            gridContainer.removeEventListener('mouseover', draw);
            gridContainer.removeEventListener('mouseover', drawMulti);
            gridContainer.addEventListener('mouseover', drawBlack);
        });
    });
    multiButton.addEventListener('click', event => {
        gridContainer.addEventListener('click', e => {
            gridContainer.removeEventListener('mouseover', draw);
            gridContainer.removeEventListener('mouseover', drawBlack);
            gridContainer.addEventListener('mouseover', drawMulti);
        });
    });
    gridContainer.addEventListener('click', e => {
        gridContainer.removeEventListener('mouseover', drawBlack);
        gridContainer.removeEventListener('mouseover', drawMulti);
        gridContainer.addEventListener('mouseover', draw);
    });
}

slider.oninput = function () {
    clearGridContainer();
    const gridDivisions = slider.value ** 2;
    sliderValueText.textContent = `GRID SIZE: ${slider.value}`;
    gridContainer.style.setProperty('grid-template-columns', `repeat(
            ${slider.value}, minmax(auto, auto))`);
    for (let i = 0; i < gridDivisions; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        gridContainer.appendChild(gridDiv);
    }
    listen();
}

function clearGridContainer() {
    const gridContainer = document.querySelector('.gridContainer');
    const allGridDivs = document.querySelectorAll('.gridDiv');
    allGridDivs.forEach((div) => {
        gridContainer.removeChild(div);
    });
}

function clear() {
    const allGridDivs = document.querySelectorAll('.gridDiv');
    allGridDivs.forEach((div) => {
        div.style.backgroundColor = 'rgb(206, 206, 206)';
    });
    colorSwatch.style.setProperty('background-color', 'rgb(128,128,128');
    resetRGB();
}

function random(number) {
    return Math.floor(Math.random()* number);
}

function draw(event) {
    event.target.style.backgroundColor = colorSwatch.style.backgroundColor;
    gridContainer.addEventListener('click', e => {
        gridContainer.removeEventListener('mouseover', draw);
    }, { once: true });
}


function drawMulti(event) {
    const rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    event.target.style.backgroundColor = rndColor;
    colorSwatch.style.backgroundColor = rndColor;
    gridContainer.addEventListener('click', e => {
        gridContainer.removeEventListener('mouseover', drawMulti);
    }, { once: true });
}

function drawBlack(event) {
    colorSwatch.style.setProperty('background-color', 'rgb(0, 0, 0');
    redValue.value = 0;
    greenValue.value = 0;
    blueValue.value = 0;
    event.target.style.backgroundColor = 'rgb(0,0,0)';
    gridContainer.addEventListener('click', e => {
        gridContainer.removeEventListener('mouseover', drawBlack);
    }, { once: true });
}

function setRGB() {
    gridContainer.removeEventListener('mouseover', drawBlack);
    gridContainer.removeEventListener('mouseover', drawMulti);
    gridContainer.removeEventListener('mouseover', draw);
    colorSwatch.style.setProperty('background-color', `rgb(${redValue.value}, 
        ${greenValue.value}, ${blueValue.value})`);
    listen();
}

redValue.oninput = function () {
    setRGB();
}
greenValue.oninput = function () {
   setRGB();
}
blueValue.oninput = function () {
    setRGB();
}

function resetRGB() {
    redValue.value = 128;
    greenValue.value = 128;
    blueValue.value = 128;
    colorSwatch.style.setProperty('background-color', 'rgb(128,128,128');
}

slider.oninput();
listen();