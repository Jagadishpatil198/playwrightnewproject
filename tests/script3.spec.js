import { expect,test } from "@playwright/test";

test("login to facebook",async({page})=>{
    await page.goto("https://www.facebook.com");
})