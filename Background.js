class Background{

    constructor(images) {
        this.backgrounds = [images.desertImg1, images.desertImg2, images.snowImg1, images.snowImg2, images.spaceImg1, images.spaceImg2]
        console.log("state", this.backgrounds)
        this.grounds = [images.groundImg, images.groundImg, images.groundImg]
        this.signs = [images.nextImg, images.nextImg, images.nextImg]
        console.log(this.images)
        this.stateCounter = 0
        this.animCounter = 0
    }

    updateCounter(val){
        // hypothetically could move backwards too, need to fix Doodleman code for compatibility
        this.stateCounter += val
        let moveMan = true

        if (this.stateCounter > (this.backgrounds.length / 2) - 1) {
            // won game!
            this.stateCounter = (this.backgrounds.length / 2) - 1
            moveMan = false
            return moveMan;
        } else if (this.stateCounter < 0) {
            this.stateCounter = 0
            return false;
        } 
        console.log("state", this.stateCounter)
        console.log("anim", this.animCounter)
        return moveMan
    }

    render(){
        // background(gameSettings.skyColor)
        // // this is the ground
        // fill(gameSettings.groundColor)
        // rect(0, gameSettings.groundLevel, gameSettings.canvasWidth, gameSettings.canvasHeight - gameSettings.groundLevel)
        // if (game.state === "sun") {
        //     image(this.images[0], 0, 0)
        // } else if (game.state === "snow") {
        //     image(this.images[1], 0, 0)
        // }

        image(this.backgrounds[(this.stateCounter * 2) + this.animCounter], 0, 0, gameSettings.canvasWidth, gameSettings.canvasHeight)

        // console.log(this.images.groundImg)
        image(this.grounds[this.stateCounter], 0, gameSettings.canvasHeight - this.grounds[this.stateCounter].height + 75)
        image(this.signs[this.stateCounter], gameSettings.canvasWidth - 150, gameSettings.heroStartY, 125, 125)

    }
}