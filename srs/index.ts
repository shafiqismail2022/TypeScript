let message: String = "Shafiq"
let age: number=25
let truth:boolean=true
let girlFriend:any
girlFriend=false
console.log(message)
let id:Number[]=[1,2,3,4]
id.push(8)
console.log(id[3])
let arr:any[]=[message,age,truth]//take any type
let person:[String,number,boolean]=['shafiq',25,true] //tuples
let employee:[String,number,boolean][] //tuples Array
employee=[['shafiq',26,true]]
employee=[['Yussuf',28,true]]
employee=[['Mohamed',30,true]]
let eId:[String|number] //joins either Strings or Numbers
enum team{ // default values are identified by Number starting from 0
    System_Analysis='ShaFiq',
    Database="Mohamed",
    Front_End="Kibibi",
    Backend="Abdul-Rauf",
    It_Support="Abrahman Taha"
}
console.log(team.System_Analysis)
//Objects
const user:{
    employeeId:number,
    name:String,
}={
    employeeId: 3591,//Any No, shouldn't start with 0.
    name:'SHafiq'
}
//can be simplified to 
type Users={
employeeId:number,
name:String
}
const MinistryUser:Users={
    employeeId:335,
    name:'Shafix'
}
console.log(MinistryUser.name)
//Type Assertion
let empId: any=204
let payRollNo=<number>empId
payRollNo=101
let PayAmount=empId as number
console.log(payRollNo)
function addNumber(x:number,y:number):number{
    return x+y
}
console.log(outPut)
function outPut(message:string|number) :void{
console.log(addNumber(100, 100))
}