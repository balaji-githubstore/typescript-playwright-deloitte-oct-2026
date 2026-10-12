const validLoginData = [
    { username: "admin", password: "pass", language: "English (Indian)", expectedValue: "Calendar" },
    { username: "physician", password: "physician", language: "English (Indian)", expectedValue: "Calendar" },
    { username: "accountant", password: "accountant", language: "English (Indian)", expectedValue: "Calendar" }
]
// console.log(validLoginData)
// console.log(validLoginData[0])

// console.log(validLoginData[0]?.username)

// console.log(validLoginData[2]?.username)


for(let item of validLoginData)
{
    console.log(item.username);
    console.log(item.password);
    console.log(item.language);
    console.log(item.expectedValue);
}


for(let {username,password,language,expectedValue} of validLoginData)
{
    console.log(username);
    console.log(password);
    console.log(language);
    console.log(expectedValue);
}