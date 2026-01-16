interface User{
    username: string, 
    age: number
}

type ValueType = string | number | User

interface BigUser{
    [key: string]: ValueType

}


export const exampleBigUser: BigUser = {
    username: "Sample User Name", 
    age: 32, 
    sampleUser:{
        username: "Sample User", 
        age: 32

    }

}