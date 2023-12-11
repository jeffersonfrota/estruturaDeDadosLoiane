export class Node {
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}


export const Colors = {
    RED: "RED",
    BLACK: "BLACK"
};

export class Node_red_black extends Node{
    constructor(key){
        super(key)
        this.key = key;
        this.color = Colors.RED;
        this.parent = null
    }

    is_red()
    {
        return this.color === Colors.RED
    }
}

