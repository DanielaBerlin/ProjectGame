class Game {
    constructor() {
        this.player = new Player()
        this.prize = new Prize()
        this.secondprize = new Secondprize() 
        this.obstacles = []
    }

    preload() {
        this.tony = loadImage('./images/tony.png')
        this.gun = loadImage('./images/pistola.png')
        this.espresso = loadImage('./images/espresso.png')
        this.jamon = loadImage('./images/jamon.png')
    }

    draw() {
        // clear()
        background(106, 92, 92)
        this.player.draw()
        // this.obstacles.draw()
        this.prize.draw()
        this.secondprize.draw()

        
		if (frameCount % 80 === 0) {
			this.obstacles.push(new Obstacles(this.gun))
		}

		this.obstacles.forEach((obstacle) => {
			obstacle.draw()
            if (obstacle.collision(this.player)) {
                // obstacle.velocity = -5
                // noLoop()
                // textSize(32)
                // text("You won! ;)", 300, 300)




            }
		})		
        
        
        // if (frameCount % 80 === 0) {
		// 	this.obstacles.push(new Obstacles(this.gun))
		// }

		// this.obstacles.forEach((obstacle) => {
		// 	obstacle.draw()
        //     if (obstacle.collision(this.player)) {
        //         // obstacle.velocity = -5
        //         // noLoop()
        //         // textSize(32)
        //         // text("You won! ;)", 300, 300)




        //     }
		// })

	}
}



