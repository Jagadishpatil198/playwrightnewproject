

const { test } = require('@playwright/test');
const fs = require('fs');

//  to read JSON data from a file
const data = fs.readFileSync("./tests/testdata/test.json");
const logindata= JSON.parse(data);

test("login",async ({page}) => {
   

    // Fetch data from data.json
   
    const username =  logindata.username;
    const password =  logindata.password;

    console.log('Fetched Username:', username);
    console.log('Fetched Password:', password);

    // Navigate to the login page
    await page.goto('https://www.facebook.com');

    // Fill in the username and password fields
    await page.locator("//input[@name='email']").fill(username)
    await page.locator("//input[@name='pass']").fill(password)

    // Click the login button
    await page.locator("//button[text()='Log in']").click();

});
