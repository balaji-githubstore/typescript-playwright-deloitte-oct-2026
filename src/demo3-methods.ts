//named parameters - methods
function add({ num1, num2 }: { num1: number, num2: number }): number {
    return num1 + num2;
}

//create areaOfTriangle method with named parameter 
function areaOfTriangle({base,height}:{base:number,height:number}): number {
    return (base * height) / 2;
}

let result: number = add({ num1: 10, num2: 20 });
console.log(result)

result=areaOfTriangle({base:20,height:30});
