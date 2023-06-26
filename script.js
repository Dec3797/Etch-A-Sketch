const container = document.querySelector('#container')
const resizeButton = document.querySelector('#resize')


function createGrid(){
    for (let i =  1; i <= 256; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid')
        grid.style.height = '50px';
        grid.style.width = '50px'
        container.appendChild(grid)
        grid.addEventListener('mouseover', function(){
            grid.style.backgroundColor = 'black'
        })
    }
}

function clearGrid(){
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((grid) => {
        container.removeChild(grid)
    });
}

resizeButton.addEventListener('click', function(){
    squareAmount = prompt('How many squares squared would you like your grid?', '')
    if (squareAmount >= 100 || squareAmount < 10){
    return 'Please enter a number between 10 to 99';
    } else if (!squareAmount){
    createGrid();
    } else {
    for (let i = 1; i <= (squareAmount * squareAmount); i++){
        clearGrid();
        const grid = document.createElement('div');
        grid.classList.add('grid')
        grid.style.height = `${squareAmount * 3.125}px`;
        grid.style.width = `${squareAmount * 3.125}px`;
        container.appendChild(grid)
        grid.addEventListener('mouseover', function(){
            grid.style.backgroundColor = 'black';
    })
    }
    }
})


createGrid()




//function to get random number up to 255 for RGB colours.
/*function randomNumberGenerator(rgb){
    return Math.floor(Math.random() * (rgb + 1))
}*/

//function to pick the random colour.
/*function randomColourGenerator(){
    let red = randomNumberGenerator(0, 255);
    let green = randomNumberGenerator (0, 255);
    let blue = randomNumberGenerator (0, 255);
    return `rgb ${[red, green, blue]}`
}*/


