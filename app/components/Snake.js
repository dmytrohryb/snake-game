import {Behavioral} from "./Behavioral"

export class Snake extends Behavioral{
    constructor(head, tail, direction) {
        super()
        this.head = head
        this.tail = tail
        this.direction = direction
    }

    move(){
        let head = this.head
        this.head  = {
            x: this.head.x + this.direction.x,
            y: this.head.y + this.direction.y
        }
        let curElem
        for (let i = 0; i < this.tail.length; i++){
            let direction
            if(i === 0){
                direction = {x: head.x - this.tail[i].x, y: head.y - this.tail[i].y}
            }else{
                direction = {x: this.tail[i-1].x - this.tail[i].x, y: this.tail[i-1].y - this.tail[i].y}
            }
            this.tail[i] = {
                x: this.tail[i].x + direction.x,
                y: this.tail[i].y + direction.y
            }
        }

    }

    update() {
        this.move()
        console.log(this.head)
        console.log(this.tail)
    }
}