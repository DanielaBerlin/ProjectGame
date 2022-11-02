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
        this.y -= 100
        }

    }

    moveDown() {
        if (this.y <= 700) {
        this.y += 100
        }
    }    

    moveLeft() {
        if (this.x >= 50) {
        this.x -= 100
        }
    }

    moveRight() {
        if (this.x <= 550) {
        this.x += 80
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

		// Get the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		
        // dist(x1, y1, x2, y2) returns the distance between the objects
		if (dist(obstacleX, obstacleY, playerX, playerY) < 25) {
            game.player.life--
			return false
		} else {
			return true
		}

    }
}


class Prize {
    constructor(){
        this.jamon
        this.x = (Math.random() * height) 
        this.y = 0
        this.width = 70
        this.height = 60
        this.velocity = 1

    }

    draw(){

        this.y += this.velocity
        image(game.jamon, this.x, this.y, this.width, this.height)
    
    }

    collision(prizePlayer) {

		let prizePlayerX = this.x + this.width / 2
		let prizePlayerY = this.y + this.height / 2

		// Get the middle of the player
		let prizeX = prizePlayer.x + prizePlayer.width / 2
		let prizeY = prizePlayer.y + prizePlayer.height / 2
		
        // dist(x1, y1, x2, y2) returns the distance between the objects
		if (dist(prizePlayerX, prizePlayerY, prizeX, prizeY) > 25) {

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
        // this.x += 0
        // this.y += 1
    }

    collision(secondprize) {

		let secondprizeX = this.x + this.width / 2
		let secondprizeY = this.y + this.height / 2

		// Get the middle of the player
		let secondX = secondprize.x + secondprize.width / 2
		let secondY = secondprize.y + secondprize.height / 2
		
        // dist(x1, y1, x2, y2) returns the distance between the objects
		if (dist(secondprizeX, secondprizeY, secondX, secondY) > 25) {
            //game.player.score++
            
			return false

		} else {

			return true
		}
    }
}