import {Behavioral} from "./Behavioral";

export class Moving extends Behavioral{
    constructor(context, canvas, grid) {
        super(context, canvas, grid)
        this.moved = false
    }

    move(){
        // this method must be overridden for each inheritor class in which it is necessary to interact with the main loop
    }
}