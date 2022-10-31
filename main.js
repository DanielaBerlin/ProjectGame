
let player = new Player()
let obstacles = new Obstacles()
let prize = new Prize()

function preload () {
    player.preload()
    obstacles.preload()
    prize.preload()
    
}


function setup() {
	createCanvas(700, 900)
    background(106, 92, 92)
}


function draw () {
    player.draw()
    obstacles.draw()
    prize.draw()

}
