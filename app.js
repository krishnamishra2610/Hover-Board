const container =
    document.getElementById('container');
const squaresNo = 500;
const colors = ['#CC00CC', '#FFCC33 ', '#33FF33', '#0000FF', '#66FF00', '#FFF9C4', '#4DD0E1', '#B71C1C'];

for (i = 0; i < squaresNo; i++) {
    const square = document.createElement("div");
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColorToEl(square);
    });

    square.addEventListener('mouseout', () => {
        removeColorFromEl(square);
    });

    container.appendChild(square);
}

function setColorToEl(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColorFromEl(element) {

    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';

}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}