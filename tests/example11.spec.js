import { expect,test } from "@playwright/test";


test("amazon",async({page})=>{

     await page.goto("https://www.amazon.com");
})