import fs from "fs";
let output = fs.readFileSync("test-data/data.json", "utf-8");
let jsonObj = JSON.parse(output);
console.log(jsonObj["validLoginData"]);
console.log(jsonObj["invalidLoginData"]);
