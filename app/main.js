import {Grid} from "./components/Grid"
import {Snake} from "./components/Snake";
import {Game} from "./components/Game";
import {FoodGenerator} from "./components/FoodGenerator";

let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

const game = new Game()
let grid = new Grid(canvas, context)
let snake = new Snake(game, grid, canvas, context, {x: 14, y: 14}, [{x: 13, y: 14}, {x: 12, y: 14}],{x: 1, y: 0})
let foodGenerator = new FoodGenerator(context, canvas, grid, snake)

game.subscribe(snake)
game.subscribe(foodGenerator)
game.start()
