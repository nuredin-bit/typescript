

export enum Direction{
    LEFT, 
    RIGHT, 
    TOP, 
    BOTTOM
}

export function tellMeTheDirection(dir : Direction  ): string{
    if(dir === Direction.LEFT){
        return "This is direction is left"
    }else if(dir === Direction.RIGHT){
        return "This is direction is right"
    }else if(dir === Direction.BOTTOM){
        return "this is direction is bottom"
    }else{
        return "this is direction is right"
    }


}