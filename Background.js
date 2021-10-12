class Background{

    constructor(images) {
        this.backgrounds = [images.sunImg, images.snowImg]
        this.grounds = [images.groundImg, images.groundImg]
        this.signs = [images.nextImg, images.nextImg]
        console.log(this.images)
        this.stateCounter = 0
    }

    updateCounter(val){
        // hypothetically could move backwards too, need to fix Doodleman code for compatibility
        this.stateCounter += val
        let moveMan = true
        if (this.stateCounter > this.backgrounds.length - 1) {
            // won game!
            this.stateCounter = this.backgrounds.length - 1
            moveMan = false
            return moveMan;
        } else if (this.stateCounter < 0) {
            this.stateCounter = 0
            return false;
        } 
        console.log("state", this.stateCounter)
        return moveMan
    }

    render(){
        // background(gameSettings.skyColor)
        // // this is the ground
        // fill(gameSettings.groundColor)
        // rect(0, gameSettings.groundLevel, gameSettings.canvasWidth, gameSettings.canvasHeight - gameSettings.groundLevel)
        console.log(game.state)
        // if (game.state === "sun") {
        //     image(this.images[0], 0, 0)
        // } else if (game.state === "snow") {
        //     image(this.images[1], 0, 0)
        // }

        image(this.backgrounds[this.stateCounter], 0, 0)

        // console.log(this.images.groundImg)
        image(this.grounds[this.stateCounter], 0, gameSettings.canvasHeight - this.grounds[this.stateCounter].height + 125)
        image(this.signs[this.stateCounter], gameSettings.canvasWidth - 150, gameSettings.heroStartY, 125, 125)

    }
}