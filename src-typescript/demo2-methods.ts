export function areaOfCircle(radius: number): number {
    return 3.14 * radius * radius;
}

function areaOfRectangle(length: number, width: number): number {
    return length * width;
}

//areaOfTriangle
function areaOfTriangle(base: number, height: number): number {
    return (base * height) / 2;
}

function getAuthorName(): string {
    return "Balaji Dinakaran";
}

function close(): void {

}

function add(a: number, b: number, c?: number): number {
    if (typeof c === "undefined") {
        return a + b;
    }
    else {
        return a + b + c;
    }
}

//while calling method, check for argument and return type

let result: number = areaOfCircle(10)
console.log(result)

result = areaOfCircle(20)
console.log(result)

result = areaOfCircle(30)
console.log(result)

result = areaOfRectangle(10, 10)
console.log(result)

console.log(areaOfRectangle(20, 20))

console.log(areaOfTriangle(25, 1))

let myName: string = getAuthorName()
console.log(myName)

close()
result = add(1,1)
result = add(1,1,1)
console.log(result)
