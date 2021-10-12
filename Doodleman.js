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
        this.accelerationX = 10
        this.accelerationY = 1
        this.velocityX = 0
        this.velocityY = 0
        this.drag = 2
        this.gravity = 2
        this.jumping = false
        this.jumpValue = 0
        this.jumpInterval = null
        // this.jumpSound = jumpSound
        // this.boundingbox = new BoundingBox(this.x, this.y, this.size)
        this.score = 0
    }

    animateJump = () => {
        if(this.direction > 0){
            this.nextImage(4, 4)
            this.velocityY += this.accelerationY
        }else{
            this.nextImage(4, 4)
            this.velocityY += this.accelerationY 
        }
    }

    clearJump = () => {
        clearInterval(this.jumpInterval)
        this.jumpValue = 1
    }

    jump(){
        console.log('hi there')
        
        if(!this.jumping){
            // this.jumpSound.play()
            this.jumpInterval = setInterval(this.animateJump, 20)
            setTimeout(this.clearJump, 500)
            this.jumping = true
            this.jumpValue = -1
        }else {
            console.log('already jumping')
        }
    }

    move(){
        console.log(this.velocityX)
        this.velocityX += this.accelerationX
    }

    nextImage(start, end){
        if(this.imageCounter < start){
            this.imageCounter = start
        } else if(this.imageCounter > end){
            this.imageCounter = start
        } else {
            this.imageCounter+=this.direction
        }
    }

    render(){
        // this.boundingbox.update(this.x, this.y)
        // this.boundingbox.render()
        // if (this.direction < 0) {
        //     push();
        //     scale(-1, 1)
        //     image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
        //     pop();
        //   } else {
        //     image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
        //   }
        image(this.images[this.imageCounter], this.x, this.y, this.sizeX, this.sizeY)
    }

    runLeft(){
        this.direction = -1
        this.move()
        this.nextImage(1, 3)
    }

    runRight(){
        this.direction = 1
        this.move()
        this.nextImage(1, 3)
    }

    towardsRest(){
        if(this.velocityX > 0){
            this.velocityX -= this.drag
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
        if(this.x > gameSettings.canvasWidth){
            this.x = gameSettings.canvasWidth
            this.velocityX = 0
        }

        if(this.y > this.startY){
            this.y = this.startY
           
        }
        if(this.y < 50){
            this.jumpValue = 0        
        }
    }


    update(){
        console.log("updating")
        this.x += this.direction * this.velocityX
        this.y += this.jumpValue * this.velocityY 
        this.towardsRest()
        this.keepOnScreen()
    }

}