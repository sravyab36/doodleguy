class Doodleman {
    constructor(images, {x, y}, {sizeX, sizeY}){
        this.x = x
        this.y = y
        this.startY = y
        this.sizeX = sizeX
        this.sizeY = sizeY
        this.images = images
        this.imageCounter = 0
        this.direction = 1
        this.accelerationX = 5
        this.accelerationY = 1
        this.velocityX = 0
        this.velocityY = 0
        this.drag = 2
        this.gravity = 2
        this.jumping = false
        this.jumpValue = 0
        this.jumpInterval = null
        this.dead = false
        // this.jumpSound = jumpSound
        // this.boundingbox = new BoundingBox(this.x, this.y, this.size)
        this.score = 0
    }

    animateJump = () => {
        if(this.direction > 0){
            this.imageCounter = 4
            this.velocityY += this.accelerationY
        }else{
            this.imageCounter = 9
            this.velocityY += this.accelerationY 
        }
    }

    clearJump = () => {
        clearInterval(this.jumpInterval)
        this.jumpValue = 1
    }

    jump(){
        if(!this.jumping && !this.dead){
            // this.jumpSound.play()
            this.jumpInterval = setInterval(this.animateJump, 20)
            setTimeout(this.clearJump, 500)
            this.jumping = true
            this.jumpValue = -1
        }
    }

    move(){
        // console.log(this.velocityX)
        this.velocityX += this.accelerationX
    }

    nextImage(start, end){
        if(this.imageCounter < start){
            this.imageCounter = start
        } else if(this.imageCounter > end){
            this.imageCounter = start
        } else {
            this.imageCounter+=1
        }
    }

    render(){
        image(this.images[this.imageCounter], this.x, this.y, this.sizeX, this.sizeY)
    }

    runRight(){
        if (!this.dead) {
            this.direction = 1
            this.move()
            this.nextImage(1, 3)
        }
    }

    runLeft(){
        if (!this.dead) {
            this.direction = -1
            this.move()
            this.nextImage(5, 8)
        }
    }

    towardsRest(){
        if(this.velocityX > 0){
            this.velocityX -= this.drag
            this.velocityX = max(this.velocityX, 0)
        }else{
            if(this.x > 500){
                this.imageCounter = 0
            } else {
                this.imageCounter = 0
            } 
        }
        if(this.y < this.startY){
            this.velocity += this.gravity
            this.jumping = true
        } else {
            this.velocityY = 0
            this.jumping = false
        }
    }

    keepOnScreen(){
        if(this.x < 0){
            this.x = 0
            this.velocityX = 0
        }
        if(this.x > gameSettings.canvasWidth - 50){
            this.x = gameSettings.canvasWidth - 50
            this.velocityX = 0
        }

        if(this.y > this.startY){
            this.y = this.startY
           
        }
        if(this.y < 50){
            this.jumpValue = 0        
        }
    }

    stop() {
        this.velocityX = 0
    }


    update(){
        this.x += this.direction * this.velocityX
        this.y += this.jumpValue * this.velocityY 
        this.towardsRest()
        this.keepOnScreen()
    }

}