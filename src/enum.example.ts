

export enum Direction{
    LEFT = 1, 
    RIGHT = 2, 
    TOP, 
    BOTTOM = 32
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



export function convertEnumToValue(): any[]{
    return  Object.values(Direction).filter(
        value => typeof value === "number"
    )

}