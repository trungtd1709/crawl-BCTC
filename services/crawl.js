import { Builder, By, until } from "selenium-webdriver";
import { delay } from "../utils/index.js";

// export const crawlData = async () => {
//   let driver = await new Builder().forBrowser("chrome").build();
//   const urlToCrawl = process.env.WEB_URL_TO_CRAWL;

//   try {
//     await driver.get(urlToCrawl);
//     // let childDiv = await parentElement.findElement(By.name('_afrrk'));
//     // const trElement = await driver.findElement(
//     //   By.xpath('//tr[@role="row" and @_afrrk="1"]')
//     // );

//     // tìm các <tr> có attribute là _afrrk
//     let count = 0
//     while (count < 5) {
//       const trElements = await driver.findElements(By.xpath("//*[@_afrrk]"));
//       for (const [rowIndex, trElement] of trElements.entries()) {
//         const tdElements = await trElement.findElements(By.css("td"));
//         for (const [index, tdElement] of tdElements.entries()) {
//           if (index === 1) {
//             const anchorElement = await tdElement.findElement(By.css("a"));
//             await anchorElement.click();
//             //   const linkHref = await anchorElement.getAttribute("href");
//             //   await driver.executeScript(`window.open("${urlToCrawl}", "_blank")`);
//             //   await driver.wait(until.titleIs("TCB"), 10000);
//             await driver.navigate().back();

//           }
//         }
//       }
//       count++;
//     }

//     // let text = await firstParagraph.getText();
//     // console.log("element:", trElement);
//   } catch (error) {
//     console.error("Error:", error);
//   } finally {
//     // await driver.quit();
//   }
// };

export const crawlData = async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    const urlToCrawl = process.env.WEB_URL_TO_CRAWL;
  
    try {
      await driver.get(urlToCrawl);
  
      let count = 0;
      while (count < 5) {
        // Re-find trElements in each iteration
        const trElements = await driver.findElements(By.xpath("//*[@_afrrk]"));
        for (let i = 0; i < trElements.length; i++) {
          // Re-find tdElements for each trElement
          const tdElements = await trElements[count].findElements(By.css("td"));
          for (const [index, tdElement] of tdElements.entries()) {
            if (index === 1) {
              // Find and click the anchor element
              const anchorElement = await tdElement.findElement(By.css("a"));
              await anchorElement.click();
  
              // Perform actions on the new page
              // ...
  
              // Navigate back and wait for the page to load
              await driver.navigate().back();
              await driver.wait(until.urlIs(urlToCrawl), 5000);
            }
          }
        }
        count++;
      }
  
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // Uncomment the line below if you want to close the browser at the end
      // await driver.quit();
    }
  };
