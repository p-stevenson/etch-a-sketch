const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('#gridSliderValue');

slider.oninput = function() {
    const gridContainer = document.querySelector('.gridContainer');
    let gridDivisions =  slider.value; 
    sliderValue.textContent = `GRID Height Divisions: ${slider.value}`;
    
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
