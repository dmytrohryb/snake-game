export class Cell {
    constructor(ltp, color, context) {
        this.x = ltp.x
        this.y = ltp.y
        this.context = context

        this.fill(color)
    }

    fill(color){
        this.context.fillStyle = color
        this.context.fillRect(this.x+1, this.y+1, 18, 18)
    }
}
