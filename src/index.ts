import { tellMeTheDirection , Direction, convertEnumToValue} from "./enum.example.js";

console.log(tellMeTheDirection(Direction.LEFT))
console.log(tellMeTheDirection(Direction.RIGHT))
console.log(tellMeTheDirection(Direction.TOP))
console.log(tellMeTheDirection(Direction.BOTTOM))

convertEnumToValue().forEach( value =>{
    console.log(" Value : ", value)
})
