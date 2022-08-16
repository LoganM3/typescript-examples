let firstName:string = "Logan"
let age: number = 27
let active: boolean = true

// let names : string[] = [1,2,3,4] // gives us an error
let names : string[] = ['bobby','jennifer','lily'] // good arry

enum studentTypes{
    pending,
    active,
    graduated,
    tas,
    teachers
}
const mystatus = studentTypes.graduated

// switch(mystatus){
//     case studentTypes.active:
// }

// console.log('my status is',mystatus)

// if(mystatus == studentTypes.graduated){
//     console.log(`the students is graduated`)
// }


// console.log(`the student is ${graduated }`)
// console.log(names)
// console.log(`my firstname is ${firstName}`)

//    union example
// let code : string | number = 11
// code = "aa11"
// //code = false//error. not a string or a number
// console.log(`my entry code is ${code}`)


// functions
function sum(arr: number[]){
    return arr.reduce((total: number, num: number ) => total + num)

}

let numbers: number[] = [1,2,3,4,5,6]

// console.log(sum(numbers))

let complexItem: any = {name: "Logan"}

complexItem = {title: 'professor'}
complexItem = "its a string"
complexItem = 22

// console.log("complexItem", complexItem)

enum bloodType{
    aPositive,
    bPositive,
    oNegative,
    oPositive,
}

interface human{
    name: string,
    age: number,
    height: number,
    bloodType: bloodType,

}

const me : human = {
    name: "bobby",
    age: 22,
    height: 6 * 12,
    bloodType: bloodType.aPositive
}

console.log(me)