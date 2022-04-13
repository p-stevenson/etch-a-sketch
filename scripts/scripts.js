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
            div.style.backgroundColor = '#000000';
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

// see if you can figure out mousedown + mouseenter
// 

