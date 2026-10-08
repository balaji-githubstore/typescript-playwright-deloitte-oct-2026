import { Employee } from "./demo5-employee.ts"
import { areaOfCircle } from "./demo2-methods.ts"

//below make use of Employee template
Employee.companyName = "Deloitte";

let emp1: Employee = new Employee();
let emp2: Employee = new Employee();
let emp3: Employee = new Employee();

//emp1 (101,"saul",5000,"Deloitte")
emp1.empId = 101;
emp1.empName = "Saul";
emp1.empSalary = 5000;

//emp2 (102,"kim",6000,"Deloitte")
emp2.empId = 102;
emp2.empName = "Kim";
emp2.empSalary = 6000;

emp2.displayEmployeeRecord()
emp1.displayEmployeeRecord()
emp3.displayEmployeeRecord()

console.log(typeof emp1)

//to check whether it is type of Employee
console.log(emp1 instanceof Employee)
Employee.getCompanyName()

console.log(areaOfCircle(2))


let emp4:Employee=Employee.getEmployeeInstance();
let emp5:Employee=Employee.getEmployeeInstance();

emp4.displayEmployeeRecord();
emp5.displayEmployeeRecord();