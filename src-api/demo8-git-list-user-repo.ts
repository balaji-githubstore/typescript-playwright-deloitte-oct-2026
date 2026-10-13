import { request } from "playwright";
import fs from "fs";



const jsonObj = JSON.parse(fs.readFileSync("test-data/secret.json", "utf-8"));
const token = jsonObj["token"];

const baseUrl="https://api.github.com"
const resource="/user/repos"

const context = await request.newContext();
const response = await context.get(baseUrl+resource,
    {headers:{"Accept":"application/vnd.github+json","X-GitHub-Api-Version":"2026-03-10",
        "Authorization":`Bearer ${token}`}});

console.log(response.status());
console.log(response.statusText());
const jsonBody=await response.json();
console.log(jsonBody);
console.log(jsonBody[0]);

//listing all repo name for the authenticated user
for(let repo of jsonBody)
{
    console.log(repo["full_name"]);
}