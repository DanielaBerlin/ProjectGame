class Game {
    constructor() {
        this.player = new Player()
        this.secondPrize = [] 
        this.obstacles = []
        this.prize = []
    }

    preload() {
        this.tony = loadImage('./images/tony.png')
        this.gun = loadImage('./images/gun.png')
        this.espresso = loadImage('./images/espresso.png')
        this.sandwich = loadImage('./images/sandwich.png')
        this.sad = loadImage('./images/sad.gif')
        this.happy = loadImage('./images/celebrating.gif')
    }

    draw() {
        background(106, 92, 92)
        this.player.draw()
		if (frameCount % 20 === 0) {
			this.obstacles.push(new Obstacles(this.gun))
		}

		this.obstacles.forEach((obstacle) => {
			obstacle.draw()
        })
        this.obstacles = this.obstacles.filter(obstacle => {
            if (!obstacle.collision(this.player)) {
                document.querySelector(".life span").innerHTML = this.player.life
                
                if (game.player.life ===0){
                    noLoop()
                    textSize(50)
                    text("You died", 250, 200)
                    image(this.sad, 200, 300, 300, 300)
                } else {
                    return false
                }
            } else {
                return true
            }
        })	
        
        if (frameCount % 200 === 0) {
		this.prize.push(new Prize())
		 }

		this.prize.forEach((prize) => {
			prize.draw()
        })
          this.prize = this.prize.filter(prize => {
              if (prize.collision(this.player)) {
                if (game.player.score >= 50){
                    noLoop()
                    textSize(50)
                    text("You win", 250, 200)
                    image(this.happy, 200, 300, 300, 300)
                    } else {
                      this.player.score += 10
                      document.querySelector(".score span").innerHTML = this.player.score
                      console.log(this.player.score)
                        return false
                    }
                  } else {
                      return true
                  }
		  })


        if (frameCount % 150 === 0) {
		this.secondPrize.push(new Secondprize())
		 }

		this.secondPrize.forEach((secondPrize) => {
			secondPrize.draw()
        })
              this.secondPrize = this.secondPrize.filter(secondPrize => {
                  if (secondPrize.collision(this.player)) {
                      if (game.player.score >= 50){
                          noLoop()
                          textSize(32)
                          text("You win", 300, 300)
                          image(this.happy, 200, 300, 300, 300)
                          } else {
                            this.player.score += 5
                            document.querySelector(".score span").innerHTML = this.player.score
                            console.log(this.player.score)
                              return false
                          }
                      } else {
                          return true
                      }
		  })

	}
}



