import { z } from "zod";
import { ezuiRouter } from "../ezuiRouter";

(async () => {
  const router = new ezuiRouter({
    preBrowserMiddleware: async () => {
      console.log("preBrowser middleware");
    },
    mode: "pool",
  })
    .procedure({
      target: {
        url: "https://www.amazon.in/HyperX-QuadCast-Condenser-Microphone-Anti-Vibration/dp/B07NZZZ746/ref=sr_1_6?crid=Q067IH3XTI36&keywords=hyperx&qid=1685175486&sprefix=hyper%2Caps%2C204&sr=8-6",
        options: {
          waitUntil: "domcontentloaded",
        },
      },
      output: z.string(),
      scrape: async ({ page }) => {
        console.log("started");
        await page.setViewport({ width: 1920, height: 1080 });

        return await page.$eval(".a-price-whole", (el) => {
          return el;
        });
      },
      onComplete: async (data) => {
        console.log("got price", data);
        return data;
      },
      onError: ({ isZodError }) => {
        console.log(`caught a ${isZodError ? "output parsing " : ""}error`);
      },
    })
    .procedure({
      target: {
        url: "https://www.amazon.in/HyperX-Headset-Nintendo-HX-HSCC-2-BK-WW/dp/B08HQW9SGP/",
        options: {
          waitUntil: "domcontentloaded",
        },
      },
      prePageMiddleware: async () => {
        console.log("normal procedure pre page middleware");
      },
      output: z.string(),
      scrape: async ({ page }) => {
        console.log("started");
        await page.setViewport({ width: 1920, height: 1080 });

        return await page.$eval(".a-price-whole", (el) => {
          return el.textContent;
        });
      },
      onComplete: async (data) => {
        console.log("got price", data);
        return data;
      },
    })

    .procedure({
      target: {
        url: [
          "https://www.amazon.in/HyperX-Headset-Nintendo-HX-HSCC-2-BK-WW/dp/B08HQW9SGP/",
          "https://www.amazon.in/HyperX-QuadCast-Condenser-Microphone-Anti-Vibration/dp/B07NZZZ746/ref=sr_1_6?crid=Q067IH3XTI36&keywords=hyperx&qid=1685175486&sprefix=hyper%2Caps%2C204&sr=8-6",
        ],
        options: {
          waitUntil: "domcontentloaded",
        },
      },
      prePageMiddleware: async () => {
        console.log("looped procedure pre page middleware");
      },
      output: z.string(),
      scrape: async ({ page }) => {
        await page.setViewport({ width: 1920, height: 1080 });

        return await page.$eval(".a-price-whole", (el) => {
          return el.textContent;
        });
      },
      onComplete: async (data) => {
        console.log("got price", data);
        return data;
      },
    });

  let result = await router.start();

  console.log(result);
})();
