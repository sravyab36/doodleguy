
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

