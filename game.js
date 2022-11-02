class Game {
    constructor() {
        this.player = new Player()
        this.secondPrize = [] 
        this.obstacles = []
        this.prize = []
    }

    preload() {
        this.tony = loadImage('./images/tony.png')
        this.gun = loadImage('./images/pistola.png')
        this.espresso = loadImage('./images/espresso.png')
        this.jamon = loadImage('./images/jamon.png')
    }

    draw() {
        background(106, 92, 92)
        this.player.draw()
		if (frameCount % 50 === 0) {
			this.obstacles.push(new Obstacles(this.gun))
		}

		this.obstacles.forEach((obstacle) => {
			obstacle.draw()
         //   if (obstacle.collision(this.player)) {
                // obstacle.velocity = -5
                // noLoop()
                // textSize(32)
                // text("You won! ;)", 300, 300)
          //  }
		})		
        
        console.log(this.prize.length)
         if (frameCount % 50 === 0) {
		this.prize.push(new Prize())
		 }

		this.prize.forEach((prize) => {
			prize.draw()
        //    if (prize.collision(this.player)) {
        //         // obstacle.velocity = -5
        //         // noLoop()
        //         // textSize(32)
        //         // text("You won! ;)", 300, 300)
          //  }
		})


        if (frameCount % 50 === 0) {
		this.secondPrize.push(new Secondprize())
		 }

		this.secondPrize.forEach((secondPrize) => {
			secondPrize.draw()
        //    if (prize.collision(this.player)) {
        //         // obstacle.velocity = -5
        //         // noLoop()
        //         // textSize(32)
        //         // text("You won! ;)", 300, 300)
          //  }
		})

	}
}



