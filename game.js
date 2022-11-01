class Game {
    constructor() {
        this.player = new Player()
        this.obstacles = new Obstacles()
        this.prize = new Prize()
        this.secondprize = new Secondprize() 
    }

    preload() {
        this.tony = loadImage('./images/tony.png')
        this.gun = loadImage('./images/pistola.png')
        this.espresso = loadImage('./images/espresso.png')
        this.jamon = loadImage('./images/jamon.png')
    }

    draw() {
        clear()
        background(106, 92, 92)
        this.player.draw()
        this.obstacles.draw()
        this.prize.draw()
        this.secondprize.draw()
    }


}

