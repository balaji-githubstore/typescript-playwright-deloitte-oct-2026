import fs from "fs";

let jsonObj=JSON.parse(fs.readFileSync("test-data/data.json","utf-8"));

for(let item of jsonObj["validLoginData"])
{
    console.log(item["username"]);
    console.log(item["password"]);
    console.log(item["language"]);
    console.log(item["expectedValue"]);
}

for(let item of jsonObj["invalidLoginData"])
{
    console.log(item["username"]);
    console.log(item["password"]);
    console.log(item["language"]);
    console.log(item["expectedError"]);
}
// console.log(jsonObj["validLoginData"]);
// console.log(jsonObj["validLoginData"][0]);
// console.log(jsonObj["validLoginData"][1]);

// console.log(jsonObj["invalidLoginData"]);
// console.log(jsonObj["invalidLoginData"][0]);


// class JsonUtils {
//     public static getJSONValue(key: string): any {
//         const jsonObj = JSON.parse(fs.readFileSync("test-data/data.json", "utf-8"));
//         return jsonObj[key];
//     }
// }

// let obj=JsonUtils.getJSONValue("invalidLoginData")
// console.log(obj)
// console.log(obj[0])