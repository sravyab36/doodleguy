class Background{

    constructor(images) {
        this.images = images
    }

    render(){
        // background(gameSettings.skyColor)
        // // this is the ground
        // fill(gameSettings.groundColor)
        // rect(0, gameSettings.groundLevel, gameSettings.canvasWidth, gameSettings.canvasHeight - gameSettings.groundLevel)
        if (game.state = "sun") {
            image(this.images.sunImg, 0, 0)
        } else {
            image(this.images.snowImg, 0, 0)
        }

        // console.log(this.images.groundImg)
        image(this.images.groundImg, 0, gameSettings.canvasHeight - this.images.groundImg.height + 125)

    }
}