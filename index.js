const puppeteer = require("puppeteer");
console.log("started", new Date());
(async () => {
  /** 
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  // other actions...
  await browser.close();
**/
  puppeteer
    .launch({ headless: true })
    .then(async (browser) => {
      console.time("start");
      const page = await browser.newPage();
      await page.goto(
        "https://www.goodreads.com/choiceawards/best-fiction-books-2020"
      );
      await browser.close();
      console.timeEnd("start");
    })
    .catch((error) => {
      console.log(error);
    });
})();
