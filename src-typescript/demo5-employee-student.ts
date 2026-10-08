//User defined datatype
export class Employee {
    public empId?: number;
    public empName?: string;
    public empSalary?: number;
    public static companyName?: string;

    public displayEmployeeRecord(): void {
        console.log(this.empId);
        console.log(this.empName);
        console.log(this.empSalary);
        console.log(Employee.companyName);
    }

    public static getCompanyName(): void {
        console.log(Employee.companyName)
    }

    public static getEmployeeInstance():Employee
    {
        let emp:Employee=new Employee();
        return emp;
    }
}

export class Student{
    public id?: number;
    public name?: string;
    public course?: string[];
    public age?: number;

    public displayStudentRecord(): void {
        console.log(this.id);
        console.log(this.name);
        console.log(this.age);
        console.log(this.course);
    }
}