import {Grid} from "./components/Grid"
import {Snake} from "./components/Snake";
import {Game} from "./components/Game";

let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

const game = new Game()
let grid = new Grid(canvas, context)
let snake = new Snake({x: 140, y: 140}, [{x: 120, y: 140}, {x: 100, y: 140}],{x: 20, y: 0})

game.subscribe(snake)
game.start()
