import {Cell} from "./Cell"

export class Food extends Cell{
    constructor(ltp, color, context) {
        super(ltp, color, context)
        this.changeCoordingates = this.changeCoordingates.bind(this)
    }

    changeCoordingates(x, y){
        this.x = x
        this.y = y
        this.fill('green')
    }
}