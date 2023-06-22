const container = document.querySelector('#container')


function createGrid(){
    for (let i =  1; i <= 256; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid')
        container.appendChild(grid)
        grid.addEventListener('mouseover', function(){
            grid.style.backgroundColor = 'black'
        })
    }
}



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



createGrid()

