import {Food} from "./Food"
import {Behavioral} from "./Behavioral"
import Random from "./Random"

export class FoodGenerator extends Behavioral{
    constructor(context, canvas, grid, snake) {
        super(context, canvas, grid)
        this.snake = snake
        this.food = undefined

        this.generate()
    }

    randCoordinates(){
        return {x: Random(0, Math.floor(this.canvas.width / 20)) * 20, y: Random(0, Math.floor(this.canvas.height / 20)) * 20}
    }

    generate(){
        this.food = new Food(this.randCoordinates(), 'green', this.context, this.snake)
    }

    update() {
        if(this.snake.head.x === this.food.x/20 && this.snake.head.y === this.food.y/20){
            this.snake.growUp({x: this.food.x/20, y: this.food.y/20})
            let coordinates = this.randCoordinates()
            this.food.changeCoordingates(coordinates.x, coordinates.y)
        }
    }
}