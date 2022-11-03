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
        stroke(255, 204, 0);
        strokeWeight(4);
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
                    textSize(32)
                    text("You death", 300, 300)
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
                    textSize(32)
                    text("You win", 300, 300)
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



