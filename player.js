class Player {
    constructor() {
        this.tony
        this.x = 250
        this.y = 750
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
        image(this.gun, 550, 50, 60, 50)
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
        image(this.jamon, 25, 50, 70, 60)
        image(this.espresso, 250, 60, 80, 40)
       
    }

}
