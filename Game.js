class Game {
    constructor(images, sounds){
        this.images = images
        // this.sounds = sounds
        this.doodleManImages = loadDoodlemanImages({right: this.images.spritesRImg, left: this.images.spritesLImg})
        // this.coinImages = loadCoinImages(this.images.objectsImg)
        // this.goombaImages = loadGoombaImages(this.images.goombaImg)
        // this.numCoins = gameSettings.numCoins
        // this.numGoombas = gameSettings.numGoombas
        this.started = false
        this.over = false
        this.hero = new Doodleman(this.doodleManImages, {x: gameSettings.heroStartX, y: gameSettings.heroStartY}, {sizeX: gameSettings.heroSizeX, sizeY: gameSettings.heroSizeY} )
        // this.coins = Array.from({ length: gameSettings.numCoins}, (el, i) => {
        //     return new Coin(this.coinImages, this.sounds.coinSound, { x: gameSettings.coinSize * i, y: gameSettings.coinLevel }, gameSettings.coinSize)
        // })
        // this.goombas = null
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
            // this.coins = Array.from({ length: gameSettings.numCoins}, (el, i) => {
            //     return new Coin(this.coinImages, this.sounds.coinSound, { x: gameSettings.coinSize * i, y: gameSettings.coinLevel }, gameSettings.coinSize)
            // }}
            this.hero = new Doodleman(this.doodleManImages, {x: gameSettings.heroStartX, y: gameSettings.heroStartY}, {sizeX: gameSettings.heroSizeX, sizeY: gameSettings.heroSizeY})
            // this.goombas = Array.from({length: this.numGoombas}, (el, i) => {
            //     return new Goomba(this.goombaImages, {x: gameSettings.goombaFirstX + (gameSettings.goombaMinSpace * (gameSettings.goombaRandomSpaceMult * Math.random()) * i), y: gameSettings.goombaStartY}, gameSettings.goombaSize)
            // })
            this.started = true
            this.over= false
            // this.died = false
            this.startButton.hide()
            // this.sounds.themeSong.play()
        }
    }

    // checkCollisions(){
    //     this.coins.forEach((coin, idx) => {
    //         if(!coin.collected){
    //             if(checkCoinCollision(this.hero, coin)){
    //                 this.hero.score ++
    //                 this.scoreboard.update(this.hero.score)
    //                 coin.collected = true
    //                 coin.playSound()
    //                 // set coin to collected
    //                 //play the coin sound 
    //             }
    //         }
    //     })

    //     this.goombas.forEach((goomba) => {
    //         if(!goomba.disabled){
    //             if(checkGoombaCollision(this.hero, goomba)){
    //                 if(checkHeroWins(this.hero)){
    //                     goomba.die()
    //                 } else {
    //                     if(!this.died){
    //                         this.sounds.themeSong.stop()
    //                         this.sounds.dieSound.play()
    //                         this.over = true
    //                         this.started = false
    //                         this.startButton.show()
                     
    //                         this.died = true
    //                     }

    //                 }
    //             }
    //         }
    //     })
    // }

    checkForWin() {
        if (this.background.display == "snow") {
            this.over = true
            this.started = false
            this.startButton = show()
        }
    }



    render() {
        // this.scoreboard.render()
        this.background.render()
        if(this.hero){
            this.hero.render()
       } 
        if(!this.started && !this.over){
            this.startScreen.render()
        }
        if(this.over){
            this.gameOverScreen.render()
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
            // this.goombas.forEach(goomba => goomba.update())
            // this.coins.forEach(coin => coin.update())
            // this.checkCollisions()
            this.checkForWin()
        }

    }
}


