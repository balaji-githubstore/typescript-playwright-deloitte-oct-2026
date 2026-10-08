//named parameters - methods
function add({ num1, num2 }: { num1: number, num2: number }): number {
    return num1 + num2;
}

//create areaOfTriangle method with named parameter 
function areaOfTriangle({ base, height }: { base: number, height: number }): number {
    return (base * height) / 2;
}

//method with object argument



let result: number = add({ num1: 10, num2: 20 });
console.log(result)

result = areaOfTriangle({ base: 20, height: 30 });

// Sample method to understand selectoption

function selectOptionDemo(value: string | { id: number, name?: string } | string[]) {
    console.log("runing selectOptionDemo")
}

selectOptionDemo("jack")
selectOptionDemo({ id: 101, name: "jack" })
selectOptionDemo(["red","green"])
selectOptionDemo({id:101})