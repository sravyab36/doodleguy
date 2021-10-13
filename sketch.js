let images 
let game


function preload(){
    groundImg = loadImage('assets/ground2.png')
    desertImg1 = loadImage('assets/desert_background_1.jpg')
    desertImg2 = loadImage('assets/desert_background_2.jpg')
    snowImg1 = loadImage('assets/snow_background_1.jpg')
    snowImg2 = loadImage('assets/snow_background_2.jpg')
    spaceImg1 = loadImage('assets/space_background_1.jpg')
    spaceImg2 = loadImage('assets/space_background_2.jpg')
    spritesRImg = loadImage('assets/spritesR.png')
    spritesLImg = loadImage('assets/spritesL.png')
    nextImg = loadImage('assets/next.png')
    snowballs = loadImage('assets/snowballs.png')
    tumbleweed = loadImage('assets/tumbleweed.png')


    images = {
        groundImg ,
        desertImg1, 
        desertImg2, 
        snowImg1, 
        snowImg2, 
        spaceImg1,
        spaceImg2,
        spritesRImg,
        spritesLImg,
        nextImg,
        snowballs,
        tumbleweed
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
}
