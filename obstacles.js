class Player {
    constructor() {
        this.x = 250
        this.y = 750
        this.width = 150
        this.height = 150
        this.life = 3
        this.score=0
    }

    draw(){
        image(game.tony, this.x , this.y, this.width, this.height)

    }
 
    moveUp() {
        if (this.y >= 100) {
        this.y -= 40
        }

    }

    moveDown() {
        if (this.y <= 700) {
        this.y += 40
        }
    }    

    moveLeft() {
        if (this.x >= 0) {
        this.x -= 25
        }
    }

    moveRight() {
        if (this.x <= 570) {
        this.x += 25
        }
    }


}


class Obstacles {
    constructor(){
        this.x = (Math.random() * height) 
        this.y = 0
        this.width = 60
        this.height = 50
        this.velocity = 1
        

    }

    draw(){
        this.y++
        this.y += this.velocity
        image(game.gun, this.x, this.y, this.width, this.height)

    }

    collision(playerInfo) {

		let obstacleX = this.x + this.width / 2
		let obstacleY = this.y + this.height / 2

		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		
		if (dist(obstacleX, obstacleY, playerX, playerY) < 50) {
            game.player.life--
			return false
		} else {
			return true
		}

    }
}


class Prize {
    constructor(){
        this.sandwich
        this.x = (Math.random() * height) 
        this.y = 0
        this.width = 70
        this.height = 60
        this.velocity = 1

    }

    draw(){

        this.y += this.velocity
        image(game.sandwich, this.x, this.y, this.width, this.height)
    
    }

    collision(prizePlayer) {

		let prizePlayerX = this.x + this.width / 2
		let prizePlayerY = this.y + this.height / 2

		let prizeX = prizePlayer.x + prizePlayer.width / 2
		let prizeY = prizePlayer.y + prizePlayer.height / 2
		
		if (dist(prizePlayerX, prizePlayerY, prizeX, prizeY) > 50) {

			return false
		} else {
			return true
		}
    }
}


class Secondprize {
    constructor(){
        this.espresso
        this.x = (Math.random() * height) 
        this.y = 0
        this.width = 80
        this.height = 40
        this.velocity = 1
    }

    draw() {
        this.y += this.velocity
        image(game.espresso, this.x, this.y, this.width, this.height)
    }

    collision(secondprize) {

		let secondprizeX = this.x + this.width / 2
		let secondprizeY = this.y + this.height / 2

		let secondX = secondprize.x + secondprize.width / 2
		let secondY = secondprize.y + secondprize.height / 2
		
		if (dist(secondprizeX, secondprizeY, secondX, secondY) > 50) {

			return false

		} else {

			return true
		}
    }
}