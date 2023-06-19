const container = document.querySelector('#container')


function createGrid(){
    for (let i =  1; i <= 256; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid')
        container.appendChild(grid)
    }
}

createGrid()