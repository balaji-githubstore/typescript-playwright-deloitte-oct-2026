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
}
