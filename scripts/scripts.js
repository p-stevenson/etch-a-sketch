const slider = document.querySelector('.slider');
const sliderValueText = document.querySelector('#gridSliderValue');

slider.oninput = function() {
    const gridContainer = document.querySelector('.gridContainer');
    const gridDivisions =  slider.value ** 2; 
    sliderValueText.textContent = `GRID Height Divisions: ${slider.value}`;
    gridContainer.style.setProperty('grid-template-columns', `repeat(${slider.value}, minmax(auto, auto))`);
    
    clearGridContainer();
    
    for (let i = 0; i < gridDivisions; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        gridContainer.appendChild(gridDiv);
    }
}

function clearGridContainer() {
    const gridContainer = document.querySelector('.gridContainer');
    const allGridDivs = document.querySelectorAll('.gridDiv');

    allGridDivs.forEach((div) => {
        gridContainer.removeChild(div);
    });

}
