
let player = new Player()
let obstacles = new Obstacles()
let prize = new Prize()
let secondprize = new Secondprize()

const game = new Game()

function preload () {
    player.preload()
    obstacles.preload()
    prize.preload()
    secondprize.preload()
    
}


function setup() {
	createCanvas(700, 900)
}


function draw () {
    clear()
    background(106, 92, 92)
    player.draw()
    obstacles.draw()
    prize.draw()
    secondprize.draw()
}
