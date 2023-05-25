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
// console.log(outPut)
function outPut(message:string|number) :void{
// console.log(addNumber(100, 100))
}
// interface
interface userInterface{
    readonly eId:number, // can't  be assigned
    eName:String,
    eAge?:number, //optional Argument
}
const user1:userInterface={
    eId:1234,
    eName:'ShafiQ'
}
user1.eName='Yussuf'
//interface is the same as type but type can be used with primitive and union  
//interface can be used in function to pass values
interface MathFunc{(x:number,y:number):number}   
var add:MathFunc=(x:number,y:number):number=>x+y //uses the interfaces
var subtract:MathFunc=(x:number,y:number):number=>x-y
var mult:MathFunc=(x:number,y:number):number=>x*y
var div:MathFunc=(x:number,y:number):number=>x/y
console.log(add(10.7,11.4))
interface EmpInterface{
    empId:number, // can't  be assigned
    empName:String,
    // eAge?:number, //optional Argument 
    registerId():String
}
class Employee implements EmpInterface{ //Must have the same name as the interface variables
    empId:number 
    empName:string
    constructor(id:number,ename:string){
console.log('an Employee was created')
this.empId=id,
this.empName=ename
    }
    public register():void{
        console.log(this.empName+'is registered') //String interpolarion
    }
    public registerId():String{
        return `${this.empId} is registered`
    }
}
class Employee_Rank extends Employee{
    pos:string
    constructor(id:number,name:string,position:string){
        super(id,name)
        this.pos=position
    }
}
const Employee01=new Employee(123,"Shafiq") 
const Employee02=new Employee(124,"Mahrez")
const Employee03=new Employee(125,'Yussuf')
console.log(Employee03.empName)
Employee02.register()
console.log(Employee03.registerId())
const empstatus=new Employee_Rank(124,'Mahrezz',"dataBase Administrator")
console.log(empstatus.pos)
console.log(empstatus.registerId())
//Generic Allows certain operation of validation such as inserting a string in a number Array
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}
let numArray=getArray<number>([1,2,3,4,5,6,7,8,9]) //for numbers
let strArray=getArray<string>(['shafiq','Mahrez','yussuf'])
strArray.push('Oops')
