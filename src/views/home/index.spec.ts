import puppeteer, { Browser, Page } from "puppeteer";

describe("sum", () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      executablePath: process.env.ChromePath,
      headless: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await page.close();
  });

  it("test home page", async () => {
    await page.goto("http://localhost:8080/");
    await page.setViewport({ width: 1080, height: 1024 });
    const text = await page
      .locator("div.home-page")
      .map(div => div.textContent)
      .wait();

    expect(text).toBe("homePage");
  });
});
