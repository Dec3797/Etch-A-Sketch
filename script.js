const container = document.querySelector('#container')
const colourBackground = document.querySelectorAll('.grid')


function createGrid(){
    for (let i =  1; i <= 256; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid')
        container.appendChild(grid)
    }
}

function randomNumberGenerator(min, max){
    return Math.floor(Math.random() * (max + 1))
}

function randomColourGenerator(min, max){
    let red = randomNumberGenerator(0, 255);
    let green = randomNumberGenerator (0, 255);
    let blue = randomNumberGenerator (0, 255);
    return [red, green, blue]
}

createGrid()

