
const loadDoodlemanImages = ({right: rightImg, left: leftImg}) => {
    const doodleManImages = Array.from({ length: 10}, (el, i) => {
        if (i < 5) { 
            return rightImg.get(i * 170, 26, 160, 304) 
        } else {
            return leftImg.get((i - 5) * 170, 26, 160, 304)
        }
    })  
    return doodleManImages
}

const loadObstacleImages = (obstacleImg ) => {
    const obstacleImages = Array.from({ length: 9 }, (el, i) => {
        return obstacleImg.get(0, i * 167, 167, 167)
    })

    return obstacleImages
    
}
