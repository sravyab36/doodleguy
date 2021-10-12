let objectImg, marioImg, goombaImg
let images 
let themeSong, jumpSound, coinSound
let sounds 
let game


function preload(){
    groundImg = loadImage('assets/ground.png')
    snowImg = loadImage('assets/snow_background.png')
    sunImg = loadImage('assets/sun_background.png')
    spritesRImg = loadImage('assets/spritesR.png')
    spritesLImg = loadImage('assets/spritesL.png')
    nextImg = loadImage('assets/next.png')


    images = {
        groundImg ,
        snowImg, 
        sunImg,
        spritesRImg,
        spritesLImg,
        nextImg
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

function keyReleased(){
    if(keyCode === UP_ARROW){
        game.hero.clearJump()
    }
}
