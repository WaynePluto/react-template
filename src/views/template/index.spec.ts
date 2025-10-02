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

  it("test template page add count", async () => {
    await page.goto("http://localhost:8080/template");
    await page.setViewport({ width: 1080, height: 1024 });
    let count = await page
      .locator("span.text-count")
      .map(div => div.textContent)
      .wait();
    expect(count).toBe("0");

    await page.click("button");
    count = await page
      .locator("span.text-count")
      .map(div => div.textContent)
      .wait();
    expect(count).toBe("1");
  });
});
