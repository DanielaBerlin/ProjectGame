
let player = new Player()
let obstacles = new Obstacles()
let prize = new Prize()

function preload () {
    player.preload()
    obstacles.preload()
    prize.preload()
    
}


function setup() {
	createCanvas(400, 700)
    background(255, 204, 0)
}


function draw () {
    player.draw()
    obstacles.draw()
    prize.draw()

}
