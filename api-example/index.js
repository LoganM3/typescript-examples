var firstName = "Logan";
var age = 27;
var active = true;
// let names : string[] = [1,2,3,4] // gives us an error
var names = ['bobby', 'jennifer', 'lily']; // good arry
var studentTypes;
(function (studentTypes) {
    studentTypes[studentTypes["pending"] = 0] = "pending";
    studentTypes[studentTypes["active"] = 1] = "active";
    studentTypes[studentTypes["graduated"] = 2] = "graduated";
    studentTypes[studentTypes["tas"] = 3] = "tas";
    studentTypes[studentTypes["teachers"] = 4] = "teachers";
})(studentTypes || (studentTypes = {}));
var mystatus = studentTypes.graduated;
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
function sum(arr) {
    return arr.reduce(function (total, num) { return total + num; });
}
var numbers = [1, 2, 3, 4, 5, 6];
// console.log(sum(numbers))
var complexItem = { name: "Logan" };
complexItem = { title: 'professor' };
complexItem = "its a string";
complexItem = 22;
// console.log("complexItem", complexItem)
var bloodType;
(function (bloodType) {
    bloodType[bloodType["aPositive"] = 0] = "aPositive";
    bloodType[bloodType["bPositive"] = 1] = "bPositive";
    bloodType[bloodType["oNegative"] = 2] = "oNegative";
    bloodType[bloodType["oPositive"] = 3] = "oPositive";
})(bloodType || (bloodType = {}));
var me = {
    name: "bobby",
    age: 22,
    height: 6 * 12,
    bloodType: bloodType.aPositive
};
console.log(me);
