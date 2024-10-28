const{test}=require("@playwright/test");


test("login",async({page})=>{
   
        
         await  page.goto("https://www.facebook.com");
         await page.locator("//input[@name='email']").fill("8050740930");
         await page.locator("//input[@name='pass']").fill("JP198@bldea()")
         await page.locator("//button[text()='Log in']").click()
         await page.pause(3000);


})