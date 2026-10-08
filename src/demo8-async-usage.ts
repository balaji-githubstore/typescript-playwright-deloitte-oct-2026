import { Employee } from "./demo5-employee-student.ts";

async function getDBConnection(): Promise<string> {

    for (let i = 1; i <= 10; i++) {
        console.log(i);
        //current task will wait for 1 sec
        await new Promise(r => setTimeout(r, 1000));
    }

    return "DB connection success";
}

async function getEmployeeInstance(): Promise<Employee> {
    let emp: Employee = new Employee();
    return emp;
}

//takes 10sec to establish connection so triggering the method and moving on
let runDBMethod = getDBConnection()
console.log("some other task like updating excel");
console.log("some other task like updating excel");
console.log("some other task like updating excel");
console.log("some other task like updating excel");
console.log("some other task like updating excel");

let result: string = await runDBMethod

console.log(result)

let emp:Employee=await getEmployeeInstance()