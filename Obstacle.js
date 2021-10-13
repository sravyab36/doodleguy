class Obstacle {
    constructor(images, num, background, type, {x, y}, size){
        this.num = num
        this.startX = x
        this.x = x // starts at right edge of screen
        this.y = y
        this.background = background
        this.type = type
        this.size = size
        this.images = images
        this.imageCounter = this.num
        this.disabled = (this.background.stateCounter != this.type)
    }

    render(){
        if(!this.disabled){
            image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
        }
    }

    update(){
        this.disabled = (this.background.stateCounter != this.type)
        if(!this.disabled){
            this.x -= 3
            if ((this.startX - this.x) % 2 == 0) { 
                if(this.imageCounter == 0){
                    this.imageCounter = 8
                } else {
                    this.imageCounter -= 1
                }
            }
        }
    }
}