import { request } from "playwright";
import fs from "fs";

const token = JSON.parse(fs.readFileSync("test-data/secret.json", "utf-8"))["token"];
console.log(token);


const reqBody = {
    "name": "deloitte-oct-2026",
    "private": true
}


const baseUrl = "https://api.github.com"
const resource = "/user/repos"


const context = await request.newContext();
const response = await context.post(baseUrl + resource,
    {
        data: reqBody, headers: {
            "Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2026-03-10",
            "Authorization": `Bearer ${token}`
        }
    });

console.log(response.status());
console.log(response.statusText());
const jsonBody = await response.json();
console.log(jsonBody);


