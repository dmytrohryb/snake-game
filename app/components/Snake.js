import {Moving} from "./Moving";

export class Snake extends Moving {
    constructor(game, grid, canvas, context, head, tail, direction) {
        super(context, canvas, grid)
        this.head = head
        this.game = game
        this.tail = tail
        this.direction = direction
        this.growed = false
        this.growUpPoint = {x: '', y: ''}
        this.growUp = this.growUp.bind(this)
        this.controller = this.controller.bind(this)
        addEventListener('keydown', (e) => this.controller(e))
        this.cells[this.head.x][this.head.y].fill('red')
        for(let i = 0; i < this.tail.length; i++){
            this.cells[this.tail[i].x][this.tail[i].y].fill('black')
        }
    }

    controller(e){
        switch(e.keyCode){
            case 37:  // если нажата клавиша влево
                if (this.direction.x !== 1 && !this.moved) {
                    this.direction = {x: -1, y: 0}
                    this.moved = true
                }
                break;
            case 38:   // если нажата клавиша вверх
                if (this.direction.y !== 1 && !this.moved) {
                    this.direction = {x: 0, y: -1}
                    this.moved = true
                }
                break;
            case 39:   // если нажата клавиша вправо
                if (this.direction.x !== -1 && !this.moved) {
                    this.direction = {x: 1, y: 0}
                    this.moved = true
                }
                break;
            case 40:   // если нажата клавиша вниз
                if (this.direction.y !== -1 && !this.moved) {
                    this.direction = {x: 0, y: 1}
                    this.moved = true
                    }
                break;
        }
    }

    move(){
        this.cells[this.tail[this.tail.length - 1].x][this.tail[this.tail.length - 1].y].fill('white')
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

        this.cells[this.head.x][this.head.y].fill('red')
        for(let i = 0; i < this.tail.length; i++){
            this.cells[this.tail[i].x][this.tail[i].y].fill('black')
        }
        this.moved = false
    }

    growUp(point){
        this.growUpPoint = point
        this.growed = false
    }

    update() {
        this.move()
        if(this.tail[this.tail.length - 1].x === this.growUpPoint.x && this.tail[this.tail.length - 1].y === this.growUpPoint.y){
            if(!this.growed){
                let point = {x: this.tail[this.tail.length - 1].x - this.direction.x, y: this.tail[this.tail.length - 1].y - this.direction.y}
                this.tail.push({x: point.x, y: point.y})
                this.growed = true
            }
        }
    }
}