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
console.log(outPut);
function outPut(message) {
    function addNumber(x, y) {
        return x + y;
    }
    console.log(addNumber(100, 100));
}
