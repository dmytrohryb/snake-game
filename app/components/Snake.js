import {Behavioral} from "./Behavioral"

export class Snake extends Behavioral{
    constructor(grid, context, head, tail, direction) {
        super()
        this.head = head
        this.tail = tail
        this.direction = direction
        this.context = context
        this.cells = grid.Cells
        this.draw = this.draw.bind(this)
    }

    move(){
        let tail = []
        this.head  = {
            x: this.head.x + this.direction.x,
            y: this.head.y + this.direction.y
        }
        for (let i = 0; i < this.tail.length; i++){
            let direction
            if(i === 0){
                direction = {x: (this.head.x - this.direction.x) - this.tail[i].x, y: (this.head.y - this.direction.y) - this.tail[i].y}
            }else{
                direction = {x: this.tail[i-1].x - this.tail[i].x, y: this.tail[i-1].y - this.tail[i].y}
            }
            tail[i] = {
                x: this.tail[i].x + direction.x,
                y: this.tail[i].y + direction.y
            }
        }
        this.tail = tail
    }

    draw(){
        this.cells[this.head.x][this.head.y].fill('red')
        for(let i = 0; i < this.tail.length; i++){
            this.cells[this.tail[i].x][this.tail[i].y].fill('black')
        }
    }

    erase(){
        this.cells[this.tail[this.tail.length - 1].x][this.tail[this.tail.length - 1].y].fill('white')
    }

    update() {
        this.erase()
        this.move()
        this.draw()
    }
}