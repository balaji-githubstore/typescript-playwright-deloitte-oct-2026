import { request } from "playwright";
import assert from "node:assert"

const reqBody = {
    "id": 1987,
    "category": {
        "id": 0,
        "name": "string-1987"
    },
    "name": "doggie-1987",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 0,
            "name": "string"
        }
    ],
    "status": "pending"
}

const context = await request.newContext();

const response = await context.post("https://petstore.swagger.io/v2/pet",
    {data:reqBody,headers:{"Content-Type":"application/json"}});

console.log(response.status());
const jsonBody=await response.json();
console.log(jsonBody);

assert.deepStrictEqual(response.status(),200);
assert.deepStrictEqual(jsonBody["id"],1987);
assert.deepStrictEqual(jsonBody["name"],"doggie-1987");