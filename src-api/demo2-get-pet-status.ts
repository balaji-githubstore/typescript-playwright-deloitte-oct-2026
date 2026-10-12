//GET Request with query parameter 

//base url - https://petstore.swagger.io/v2

//resource - /pet/{petid}

import { request } from "playwright";
import assert from "node:assert"

const context = await request.newContext();
const response = await context.get("https://petstore.swagger.io/v2/pet/findByStatus?status=pending");
console.log(response.status());

const jsonBody = await response.json();
console.log(jsonBody);


//for loop and iterative each index and assert the status pending
console.log(jsonBody.length); 

console.log(jsonBody[0]["status"]);
assert.deepStrictEqual(jsonBody[0]["status"],"pending");
