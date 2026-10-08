console.log("welcome to session");

//number,boolean,string
let a: number = 10 //a is reserved for number 
let b: number = 20
let c: boolean = true //c is reserved for boolean
let d: string = "hello" //d is reserved for string

a = 90

console.log(a);
console.log(b)
console.log(c)
console.log(c)

console.log(a, b, c)

let num1: number = 100;
let num2: number;

num2 = 200.3;

let result: number = num1 + num2;
console.log(result)

let radius: number = 10;
// area of circle --> pi as 3.14 * r * r 
//print the result --> the output is 314

result = 3.14 * radius * radius;
console.log("The output is", result)
console.log("The output is " + result)

console.log(`the output is ${result}`)

console.log(`the area of circle for radius ${radius} is ${result}`)



let myName: string = "hello";

console.log(myName)
console.log(myName.length)
console.log(myName.toUpperCase())
console.log(myName.charAt(1))

console.log(typeof myName)
console.log(typeof c)
console.log(typeof num1)

//array
let marks: number[] = [35, 55.5, 77, 88, 44.9, 88]

console.log(marks)
console.log(marks[0])
console.log(marks.length)

console.log(typeof marks)

// add all the marks and print average of it  

//object type 
let browserDetails: { browserName: string, browserVersion: number, isMobile: boolean }

browserDetails = { browserName: "chrome", browserVersion: 101, isMobile: true }


let browserDetails1: { browserName: string, browserVersion: number, isMobile: boolean } = { browserName: "chrome", browserVersion: 101, isMobile: true }

//create object type with property empId, empName, empSalary


let employeeDetails: { empId: number, empName: string, empSalary: number } = { empId: 101, empName: "saul", empSalary: 4500.44 }

employeeDetails = { empId: 102, empName: "jack", empSalary: 9009 }

console.log(employeeDetails)

console.log(employeeDetails.empId)
console.log(employeeDetails.empName)

// console.log(browserDetails.browserVersion)

//Union 
let poliyNumber: string | number | number[]

poliyNumber = 9990
poliyNumber = "k88982"
// poliyNumber = [10, 20, 30]
// poliyNumber=true  //only string or number

//any - can store any datatype into it //not recommended - use unknown datatype instead of any
let z: any
z = 10
z = 23.3
z = [10, 20, 30]
z = { empId: 101, empName: "saul", empSalary: 4500.44 }
console.log(z.empId)
z = "king"
console.log(z.toUpperCase())


//unknown - before using it, we need to check type
let z1: unknown
z1 = 10
z1 = 23.3
z1 = [10, 20, 30]
z1 = { empId: 101, empName: "saul", empSalary: 4500.44 }
z1 = "king"

// if (typeof z1 === "string") {
//     console.log(z1.toUpperCase())
//     console.log(z1[0])
// }

if (typeof z1 === "number") {
    console.log(z1+z1)
}

// if(typeof z1==="object")
// {
//     console.log(z1.empName[0])
// }
let browserDetails2: { browserName: string, browserVersion: number, isMobile: boolean,pages:number[] }

browserDetails2 = { browserName: "chrome", browserVersion: 101, isMobile: true ,pages:[1,3,4,455,99]}

console.log(browserDetails2.browserName)

console.log(browserDetails2.browserName[0])

console.log(browserDetails2.pages)
console.log(browserDetails2.pages[2])


//tuple 
// fixed number of elements 
//each position specific type 
//order must be follower 

let data:[number,string]

data=[10,"jack"]


let data1:number=0

if(data1>0)
{
    console.log("positive")
}
else if(data1<0)
{
    console.log("negative")
}
else {
    console.log("it's zero")
}

let data2:unknown

data2=10
 
if(typeof data2==="number")
{
   console.log(data2+data2)
}
else if(typeof data2==="string")
{
    console.log(data2)
}



let z3=10

z3=500

const z4=10

