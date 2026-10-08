import {Student} from "./demo5-employee-student.ts"

let stu1=new Student();
let stu2=new Student();

stu1.id=101;
stu1.name="kim";
stu1.age=20;
stu1.course=["AI","ML","QA"]

stu2=stu1;

stu2.age=1000;

stu1.displayStudentRecord();
stu2.displayStudentRecord();