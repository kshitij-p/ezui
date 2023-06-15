import { describe, expect, it } from "vitest";
import { promiseBatch } from "..";
import { timeout, timeoutReject, timeoutThrow, TIMEOUT_TEST_ERROR } from "./helpers";

describe("promiseBatch works properly", () => {
  const fluctuationMs = 20;
  describe("shld do tasks properly at diff times", () => {
    const timeouts = [timeout(100), timeout(100), timeout(100), timeout(200), timeout(200)];

    const tests = [
      {
        batchSize: 1,
        finishesIn: 700,
        failsToFinish: 600,
      },
      {
        batchSize: 2,
        finishesIn: 500,
        failsToFinish: 400,
      },
      {
        batchSize: 3,
        finishesIn: 300,
        failsToFinish: 200,
      },
      //Batchsize 4 finishes after 3 size because there will be 2 total batches each having a 200 ms promise
      //but batch size 3 has 2 total batches where first one has no 200ms promise and the last one has all the 200ms
      //promises
      {
        batchSize: 4,
        finishesIn: 400,
        failsToFinish: 300,
      },
      {
        batchSize: 5,
        finishesIn: 200,
        failsToFinish: 100,
      },
    ];

    for (const { batchSize, finishesIn, failsToFinish } of tests) {
      it(
        `shld finish in ${finishesIn}ms at batch size ${batchSize}`,
        async () => {
          expect((await promiseBatch(timeouts, batchSize)).length).toBe(timeouts.length);
        },
        {
          timeout: finishesIn + fluctuationMs,
        }
      );

      it.fails(
        `shld NOT finish in ${failsToFinish}ms at batch size ${batchSize}`,
        async () => {
          await promiseBatch(timeouts, batchSize);
        },
        {
          timeout: failsToFinish + fluctuationMs,
        }
      );
    }
  });

  it("shld have proper return data types", async () => {
    const timeouts = [timeout(10), timeout(20), timeoutReject(10), timeoutThrow(), timeout(30)];

    expect(await promiseBatch(timeouts, 1)).toStrictEqual([
      {
        status: "success",
        value: 10,
      },
      {
        status: "success",
        value: 20,
      },
      {
        status: "error",
        reason: "rejected",
      },
      {
        status: "error",
        reason: TIMEOUT_TEST_ERROR,
      },
      {
        status: "success",
        value: 30,
      },
    ]);
  });
});
