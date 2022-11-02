class Player {
    constructor() {
        this.x = 250
        this.y = 750
 
    }

    draw(){
        image(game.tony, this.x , this.y, 150, 150)

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

}

class Prize {
    constructor(){
        this.jamon
        this.x = (Math.random() * height) 
        // this.y = 50
        this.y = 0
        this.width = 70
        this.height = 60
        this.velocity = 1

    }

    draw(){

        this.y += this.velocity
        image(game.jamon, this.x, this.y, this.width, this.height)
    
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
}