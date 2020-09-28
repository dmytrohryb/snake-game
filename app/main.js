import {Grid} from "./components/Grid"
import {Snake} from "./components/Snake";
import {Game} from "./components/Game";

let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

const game = new Game()
let grid = new Grid(canvas, context)
let snake = new Snake(grid, context, {x: 14, y: 14}, [{x: 13, y: 14}, {x: 12, y: 14}],{x: 1, y: 0})

game.subscribe(snake)
game.start()
