import { request } from "playwright";
import assert from "node:assert"

const baseUrl="https://api.github.com"
const resource="/repositories"

const context = await request.newContext();
const response = await context.get(baseUrl+resource,{headers:{"Accept":"application/vnd.github+json","X-GitHub-Api-Version":"2026-03-10"}});

console.log(response.status());
const jsonBody=await response.json();
console.log(jsonBody);
console.log(jsonBody[0]["id"]);
console.log(jsonBody[0]["full_name"]);
console.log(jsonBody[0]["private"]);