import {Cell} from "./Cell"

export class Grid {
    constructor(canvas, context) {
        this.canvas = canvas
        this.context = context

        this.cells = []
        this.initCanvas = this.initCanvas.bind(this)
        this.draw = this.draw.bind(this)

        this.initCanvas()
        this.draw()
    }

    get Cells(){
        return this.cells
    }

    initCanvas() {
        this.canvas.width = window.innerWidth - 39
        this.canvas.height = window.innerHeight - 40

        let ltp = {x: 0, y: 0}
        while (ltp.x < this.canvas.width){
            ltp.y = 0
            let rowCells = []
            while (ltp.y < this.canvas.height){
                rowCells.push(new Cell(ltp, 'white', this.context))
                ltp.y += 20
            }
            this.cells.push(rowCells)
            ltp.x += 20
        }
    }

    draw() {
        let y = 0

        while (y < this.canvas.height){
            this.context.beginPath();
            this.context.moveTo(0, y);
            this.context.lineTo(this.canvas.width, y);
            this.context.stroke();
            y = y + 20
        }

        let x = 0

        while (x < this.canvas.width){
            this.context.beginPath();
            this.context.moveTo(x, 0);
            this.context.lineTo(x, this.canvas.height);
            this.context.stroke();
            x = x + 20
        }
    }
}