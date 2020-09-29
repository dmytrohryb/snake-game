export class Behavioral {
    constructor(context, canvas, grid) {
        this.context = context
        this.canvas = canvas
        this.cells = grid.Cells
    }

    update(){
        // this method must be overridden for each inheritor class in which it is necessary to interact with the main loop
    }
}