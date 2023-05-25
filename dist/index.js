"use strict";
let message = "Shafiq";
let age = 25;
let truth = true;
let girlFriend;
girlFriend = false;
console.log(message);
let id = [1, 2, 3, 4];
id.push(8);
console.log(id[3]);
let arr = [message, age, truth]; //take any type
let person = ['shafiq', 25, true]; //tuples
let employee; //tuples Array
employee = [['shafiq', 26, true]];
employee = [['Yussuf', 28, true]];
employee = [['Mohamed', 30, true]];
let eId; //joins either Strings or Numbers
var team;
(function (team) {
    team["System_Analysis"] = "ShaFiq";
    team["Database"] = "Mohamed";
    team["Front_End"] = "Kibibi";
    team["Backend"] = "Abdul-Rauf";
    team["It_Support"] = "Abrahman Taha";
})(team || (team = {}));
console.log(team.System_Analysis);
//Objects
const user = {
    employeeId: 3591,
    name: 'SHafiq'
};
const MinistryUser = {
    employeeId: 335,
    name: 'Shafix'
};
console.log(MinistryUser.name);
//Type Assertion
let empId = 204;
let payRollNo = empId;
payRollNo = 101;
let PayAmount = empId;
console.log(payRollNo);
function addNumber(x, y) {
    return x + y;
}
// console.log(outPut)
function outPut(message) {
    // console.log(addNumber(100, 100))
}
const user1 = {
    eId: 1234,
    eName: 'ShafiQ'
};
user1.eName = 'Yussuf';
var add = (x, y) => x + y; //uses the interfaces
var subtract = (x, y) => x - y;
var mult = (x, y) => x * y;
var div = (x, y) => x / y;
console.log(add(10.7, 11.4));
class Employee {
    constructor(id, ename) {
        console.log('an Employee was created');
        this.empId = id,
            this.empName = ename;
    }
    register() {
        console.log(this.empName + 'is registered'); //String interpolarion
    }
    registerId() {
        return `${this.empId} is registered`;
    }
}
class Employee_Rank extends Employee {
    constructor(id, name, position) {
        super(id, name);
        this.pos = position;
    }
}
const Employee01 = new Employee(123, "Shafiq");
const Employee02 = new Employee(124, "Mahrez");
const Employee03 = new Employee(125, 'Yussuf');
console.log(Employee03.empName);
Employee02.register();
console.log(Employee03.registerId());
const empstatus = new Employee_Rank(124, 'Mahrezz', "dataBase Administrator");
console.log(empstatus.pos);
console.log(empstatus.registerId());
//Generic Allows certain operation of validation such as inserting a string in a number Array
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5, 6, 7, 8, 9]); //for numbers
let strArray = getArray(['shafiq', 'Mahrez', 'yussuf']);
strArray.push('Oops');
