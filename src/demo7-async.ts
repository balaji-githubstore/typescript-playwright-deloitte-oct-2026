async function getHello():Promise<string>{
    return "hello";
}

let result:string=await getHello()

console.log(result)