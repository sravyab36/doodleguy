function checkObstacleCollision(hero, obstacle){
        if (hero.x + hero.sizeX/2 > obstacle.x - obstacle.size/2 &&
            hero.x - hero.sizeX/2 < obstacle.x + obstacle.size/2 &&
            hero.y + hero.sizeY/2 >  obstacle.y) {
            return true     
        } else {
            return false
        }
}   