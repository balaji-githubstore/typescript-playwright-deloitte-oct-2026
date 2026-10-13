import { request } from "playwright";
import assert from "node:assert"
import fs from "fs";

const jsonObj = JSON.parse(fs.readFileSync("test-data/petstore-data.json", "utf-8"));
const reqBody = jsonObj["addPet"];



const context = await request.newContext();

const response = await context.post("https://petstore.swagger.io/v2/pet",
    {data:reqBody,headers:{"Content-Type":"application/json"}});

console.log(response.status());
const jsonBody=await response.json();
console.log(jsonBody);

assert.deepStrictEqual(response.status(),200);
assert.deepStrictEqual(jsonBody["id"],2987);
assert.deepStrictEqual(jsonBody["name"],"doggie-2987");