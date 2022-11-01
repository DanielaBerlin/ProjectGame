class Player {
    constructor() {
        this.tony
        this.x = 250
        this.y = 750
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
        this.x = 550
        this.y = (Math.random() * 60) / 50

    }

    preload(){
        this.gun = loadImage('./images/pistola.png')
    }
    draw(){

        image(this.gun, this.x, this.y, 60, 50)


        this.x += 0
        this.y += 1
    }
}

class Prize {
    constructor(){
        this.jamon
        this.x = 25
        this.y = 50
        this.y = (Math.random() * 60) / 50

    }

    preload(){
        this.jamon = loadImage('./images/jamon.png')
    }
    draw(){
        image(this.jamon, this.x, this.y, 70, 60)
       
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

    preload(){
        this.espresso = loadImage('./images/espresso.png')
    }
    draw(){
        
        image(this.espresso, this.x, this.y, 80, 40)
  
    this.x += 0
    this.y += 1   

    }
}