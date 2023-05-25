var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Shafiq";
var age = 25;
var truth = true;
var girlFriend;
girlFriend = false;
console.log(message);
var id = [1, 2, 3, 4];
id.push(8);
console.log(id[3]);
var arr = [message, age, truth]; //take any type
var person = ['shafiq', 25, true]; //tuples
var employee; //tuples Array
employee = [['shafiq', 26, true]];
employee = [['Yussuf', 28, true]];
employee = [['Mohamed', 30, true]];
var eId; //joins either Strings or Numbers
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
var user = {
    employeeId: 3591,
    name: 'SHafiq'
};
var MinistryUser = {
    employeeId: 335,
    name: 'Shafix'
};
console.log(MinistryUser.name);
//Type Assertion
var empId = 204;
var payRollNo = empId;
payRollNo = 101;
var PayAmount = empId;
console.log(payRollNo);
function addNumber(x, y) {
    return x + y;
}
// console.log(outPut)
function outPut(message) {
    // console.log(addNumber(100, 100))
}
var user1 = {
    eId: 1234,
    eName: 'ShafiQ'
};
user1.eName = 'Yussuf';
var add = function (x, y) { return x + y; }; //uses the interfaces
var subtract = function (x, y) { return x - y; };
var mult = function (x, y) { return x * y; };
var div = function (x, y) { return x / y; };
console.log(add(10.7, 11.4));
var Employee = /** @class */ (function () {
    function Employee(id, ename) {
        console.log('an Employee was created');
        this.empId = id,
            this.empName = ename;
    }
    Employee.prototype.register = function () {
        console.log(this.empName + 'is registered'); //String interpolarion
    };
    Employee.prototype.registerId = function () {
        return "".concat(this.empId, " is registered");
    };
    return Employee;
}());
var Employee_Rank = /** @class */ (function (_super) {
    __extends(Employee_Rank, _super);
    function Employee_Rank(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.pos = position;
        return _this;
    }
    return Employee_Rank;
}(Employee));
var Employee01 = new Employee(123, "Shafiq");
var Employee02 = new Employee(124, "Mahrez");
var Employee03 = new Employee(125, 'Yussuf');
console.log(Employee03.empName);
Employee02.register();
console.log(Employee03.registerId());
var empstatus = new Employee_Rank(124, 'Mahrezz', "dataBase Administrator");
console.log(empstatus.pos);
console.log(empstatus.registerId());
