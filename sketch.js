let images 
let game


function preload(){
    groundImg = loadImage('assets/ground2.png')
    desertImg1 = loadImage('assets/desert_background_1.png')
    desertImg2 = loadImage('assets/desert_background_2.png')
    snowImg1 = loadImage('assets/snow_background_1.png')
    snowImg2 = loadImage('assets/snow_background_2.png')
    spaceImg1 = loadImage('assets/space_background_1.png')
    spaceImg2 = loadImage('assets/space_background_2.png')
    congratsImg1 = loadImage('assets/congrats_background_1.png')
    congratsImg2 = loadImage('assets/congrats_background_2.png')
    spritesRImg = loadImage('assets/spritesR.png')
    spritesLImg = loadImage('assets/spritesL.png')
    nextImg = loadImage('assets/next.png')
    congratsSignImg = loadImage('assets/congrats_sign.png')
    snowballs = loadImage('assets/snowballs.png')
    tumbleweed = loadImage('assets/tumbleweed.png')
    meteors = loadImage('assets/meteors.png')


    images = {
        groundImg ,
        desertImg1, 
        desertImg2, 
        snowImg1, 
        snowImg2, 
        spaceImg1,
        spaceImg2,
        congratsImg1,
        congratsImg2,
        spritesRImg,
        spritesLImg,
        nextImg,
        congratsSignImg,
        snowballs,
        tumbleweed,
        meteors
    }

    // sounds = {
    //     themeSong, 
    //     jumpSound, 
    //     coinSound,
    // }
}

function setup(){
    createCanvas(gameSettings.canvasWidth, gameSettings.canvasHeight)
    background(95, 138, 245)
    frameRate(15)

    game = new Game(images)
    setInterval(imageFlipper, 1000)
}

function draw(){
    checkKeys()
    game.update()
    game.render()    
}

function checkKeys(){
    if(keyIsDown(UP_ARROW)){
        game.hero.jump()
        return
    } else if(keyIsDown(LEFT_ARROW)){
        console.log("left")
        game.hero.runLeft()
        return
    } else if(keyIsDown(RIGHT_ARROW)){
        console.log("right")
        game.hero.runRight()
        return
    }
}

function imageFlipper() {
    console.log("flipping")
    if (game.background.animCounter == 1){
        game.background.animCounter = 0
    } else {
        game.background.animCounter = 1
    }
}

function keyReleased(){
    if(keyCode === UP_ARROW){
        game.hero.clearJump()
    }
    // if(keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW) {
    //     game.hero.stop()
    // }
}
