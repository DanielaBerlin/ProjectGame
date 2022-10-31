class Player {
    constructor() {
        this.tony
        this.x = 100
        this.y = 550
        this.espresso
    }
    preload() {
        this.tony = loadImage('./images/tony.png')
    }
    draw(){
        image(this.tony, this.x , this.y, 150, 150)
    }

}


class Obstacles {
    constructor(){
        this.gun

    }

    preload(){
        this.gun = loadImage('./images/pistola.png')
    }
    draw(){
        image(this.gun, 90, 90, 50, 50)
    }

}

class Prize {
    constructor(){
        this.jamon
        this.espresso

    }

    preload(){
        this.jamon = loadImage('./images/jamon.png')
        this.espresso = loadImage('./images/espresso.png')
    }
    draw(){
        image(this.jamon, 20, 20, 50, 40)
        image(this.espresso, 60, 60, 50, 40)
       
    }

}
