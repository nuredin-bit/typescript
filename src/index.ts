import { tellMeTheDirection , Direction, convertEnumToValue} from "./enum.example.js";
import { exampleBigUser } from "./other.type.js";

console.log(tellMeTheDirection(Direction.LEFT))
console.log(tellMeTheDirection(Direction.RIGHT))
console.log(tellMeTheDirection(Direction.TOP))
console.log(tellMeTheDirection(Direction.BOTTOM))

convertEnumToValue().forEach( value =>{
    console.log(" Value : ", value)
})

Object.values(exampleBigUser).forEach(currKey =>{
    console.log(currKey)
})

//  This is the change which comes from main
