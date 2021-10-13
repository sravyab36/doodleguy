class Game {
    constructor(images, sounds){
        this.images = images
        // this.sounds = sounds
        this.doodleManImages = loadDoodlemanImages({right: this.images.spritesRImg, left: this.images.spritesLImg})
        this.snowballImages = loadObstacleImages(this.images.snowballs)
        this.tumbleweedImages = loadObstacleImages(this.images.tumbleweed)
        this.snowballs = null
        this.tumbleweed = null
        this.started = false
        this.over = false
        this.hero = null
        this.background = new Background(this.images)
        // this.scoreboard = new Scoreboard()
        this.startButton = createButton('Start')
        this.startButton.mousePressed(this.init)
        this.startScreen = new Overlay(`Welcome to Doodle Man!`, 'Use arrow buttons to move.', this.startButton)
        this.gameOverScreen = new Overlay('Game over!', 'Start again?', this.startButton)
        // this.died = false 
    }

    init = () => {
        console.log("reached init")
        if(!this.started){
            this.hero = new Doodleman(this.doodleManImages, {x: gameSettings.heroStartX, y: gameSettings.heroStartY}, {sizeX: gameSettings.heroSizeX, sizeY: gameSettings.heroSizeY})
            this.snowballs = Array.from({length: gameSettings.numObstacles}, (el, i) => {
                return new Obstacle(this.snowballImages, i, this.background, 1, {x: gameSettings.canvasWidth + (gameSettings.obstacleMinSpace * (gameSettings.obstacleRandomSpaceMult * Math.random()) * i), y: gameSettings.heroStartY + 40}, gameSettings.obstacleSize)
            })
            this.tumbleweed = Array.from({length: gameSettings.numObstacles}, (el, i) => {
                return new Obstacle(this.tumbleweedImages, i, this.background, 0, {x: gameSettings.canvasWidth + (gameSettings.obstacleMinSpace * (gameSettings.obstacleRandomSpaceMult * Math.random()) * i), y: gameSettings.heroStartY + 40}, gameSettings.obstacleSize)
            }) 
            this.started = true
            this.over= false
            // this.background = new Background(this.images)
            // this.died = false
            this.startButton.hide()
            // this.sounds.themeSong.play()
        }
    }

    checkCollisions(){
        this.snowballs.forEach((sb) => {
            if(!sb.disabled){
                if(checkObstacleCollision(this.hero, sb)){
                    this.hero.dead = true
                    this.over = true
                    this.started = false
                    // this.sounds.themeSong.stop()
                    // this.sounds.dieSound.play()
                }
            }
        })

        this.tumbleweed.forEach((tw) => {
            if(!tw.disabled){
                if(checkObstacleCollision(this.hero, tw)){
                    this.hero.dead = true
                    this.over = true
                    this.started = false
                    // this.sounds.themeSong.stop()
                    // this.sounds.dieSound.play()
                }
            }
        })
    }

    checkForWin() {
        if (this.background.imageCounter == this.background.backgrounds.length) {
            this.over = true
            this.started = false
        }
    }



    render() {
        // this.scoreboard.render()
        this.background.render()
        if(this.hero){
            this.hero.render()
            this.snowballs.forEach(sb => sb.render())
            this.tumbleweed.forEach(tw => tw.render())
       } 
        if(!this.started && !this.over){
            this.startScreen.render()
        }
        if(this.over){
            this.gameOverScreen.render()
            this.startButton.show()
        }
    }

    update(){
        // game over state
        if(this.started && !this.over){
            if (this.hero.x >= gameSettings.canvasWidth - 50) {
                this.hero.moveMan = this.background.updateCounter(1) // later, make an array of next states! certain objects show up under specific states
                if (this.hero.moveMan) {
                    this.hero.x = 0
                }
            }

            this.hero.update()
            this.snowballs.forEach(sb => sb.update())
            this.tumbleweed.forEach(tw => tw.update())
            this.checkCollisions()
            this.checkForWin()
        }

    }
}


