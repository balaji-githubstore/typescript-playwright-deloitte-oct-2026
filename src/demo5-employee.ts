class Employee{
    public empId?:number;
    public empName?:string;
    public empSalary?:number;
    public static companyName?:string;

    public displayEmployeeRecord():void{
        console.log(this.empId);
        console.log(this.empName);
        console.log(this.empSalary);
        console.log(Employee.companyName);
    }

}

//below make use of Employee template
Employee.companyName="Deloitte";

let emp1:Employee=new Employee();
let emp2:Employee=new Employee();
let emp3:Employee=new Employee();

//emp1 (101,"saul",5000,"Deloitte")
emp1.empId=101;
emp1.empName="Saul";
emp1.empSalary=5000;

//emp2 (102,"kim",6000,"Deloitte")
emp2.empId=102;
emp2.empName="Kim";
emp2.empSalary=6000;

emp2.displayEmployeeRecord()
emp1.displayEmployeeRecord()
emp3.displayEmployeeRecord()