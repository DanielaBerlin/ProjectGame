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
        // this.x = 550
        this.x = 550
        this.y = (Math.random() * 60) / 50
        this.width = 60
        this.height = 50

    }

    draw(){
        this.y++
        image(game.gun, this.x, this.y, this.width, this.height)

        // this.x += 0
        // this.y += 1
    }

}

class Prize {
    constructor(){
        this.jamon
        this.x = 25
        this.y = 50
        this.y = (Math.random() * 60) / 50

    }

    draw(){
        image(game.jamon, this.x, this.y, 70, 60)
       
        this.x += 0
        this.y += 1
    
    }

}


class Secondprize {
    constructor(){
        this.espresso
        this.x = 250
        this.y = (Math.random() * 60) / 50
    }


    draw(){
        
        image(game.espresso, this.x, this.y, 80, 40)
  
    this.x += 0
    this.y += 1   

    }
}