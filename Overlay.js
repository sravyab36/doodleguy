class Overlay{
    constructor(text1, text2, startButton){
        this.text1 = text1 
        this.text2  =text2
        this.startButton = startButton 
        this.x = gameSettings.canvasWidth/2 - gameSettings.overlayWidth/2
        this.y = gameSettings.canvasHeight/2 - gameSettings.overlayHeight/2
        this.startButton.position(gameSettings.canvasWidth/2 - 40, gameSettings.canvasHeight/2 + 60)
    }
    render(){
        strokeWeight(0)
        fill(gameSettings.overlayColor)
        rect(this.x, this.y, gameSettings.overlayWidth, gameSettings.overlayHeight, 40)
        fill(0)
        stroke(0)
        textSize(gameSettings.textSize)
        textFont('Georgia');
        text(this.text1, this.x + 90, this.y + 100)
        text(this.text2, this.x + 80, this.y + 150)
    }
}