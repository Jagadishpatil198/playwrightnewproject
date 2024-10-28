import { expect, test } from "@playwright/test";

test("login to amazon",async({page})=>{
    await page.goto("https://www.amzon.com");
    await page.locator("//input[@id='twotabsearchtextbox']").fill("mobiles");
    await page.locator("//div[@class='nav-search-submit nav-sprite']").click();
  let elements  =await page.$$("//div[@class='a-row a-size-small']|//h2[@class='a-size-mini a-spacing-none a-color-base s-line-clamp-4']");
        array.forEach(async(element )=> {
              let text= await element.textContent();
              console.log(text)
        });





})