import { request } from "playwright";
import assert from "node:assert"

const context = await request.newContext();
const response = await context.delete("https://petstore.swagger.io/v2/pet/1987",
    {headers:{"api_key":"special-key","connection":"alive"}});

console.log(response.status());

const jsonBody = await response.json();
console.log(jsonBody);
// console.log(jsonBody["message"]);