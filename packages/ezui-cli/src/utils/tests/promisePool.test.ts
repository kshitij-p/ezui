import { describe, expect, it } from "vitest";
import { promisePool } from "..";
import { timeout, timeoutReject, timeoutThrow, TIMEOUT_TEST_ERROR } from "./helpers";

describe("promise pool works correctly", () => {
  /**
   * Most tests will have a testTimeout slightly greater than the expected time to complete it.
   * E.g. for the first test i.e. "shld do all in parallel if no concurrency arg is provided"
   * the last timeout happens at 300 so the test shld take roughly ~310 ms to finish accounting
   * for random variations. If this test's timeout was 200 it would fail.
   */

  //Task fluctuation to account for
  const fluctuationMs = 20;

  //Checks that if tasks finish at diff times, at max concurrency the total run time == time taken by the longest task
  describe("shld do tasks properly if tasks finish at different times", () => {
    for (let i = 2; i <= 5; i++) {
      const ms = 100;
      const longestTask = ms * i;

      it(
        `shld finish in ${longestTask + fluctuationMs}ms`,
        async () => {
          const timeouts = [timeout(ms), timeout(ms * 2), timeout(longestTask)];
          await promisePool(timeouts);
        },
        {
          timeout: longestTask + fluctuationMs,
        }
      );

      it.fails(
        `shld NOT finish in ${longestTask - fluctuationMs}ms`,
        async () => {
          const timeouts = [timeout(ms), timeout(ms * 2), timeout(longestTask)];
          await promisePool(timeouts);
        },
        {
          timeout: longestTask - fluctuationMs,
        }
      );
    }
  });

  describe("shld do n items at a time properly if all tasks have same time to finish", () => {
    //10 timeouts of 100ms each
    //At max concurrency shld happen in roughly 100ms
    //At min concurrency shld happen in roughly 1sec
    const ms = 100;
    const hundredMs = timeout(ms);
    const timeouts = [
      hundredMs,
      hundredMs,
      hundredMs,
      hundredMs,
      hundredMs,
      hundredMs,
      hundredMs,
      hundredMs,
      hundredMs,
      hundredMs,
    ];

    for (let concurrency = timeouts.length; concurrency >= 1; concurrency--) {
      let expectedTime = 0;
      let totalTasks = timeouts.length;
      while (totalTasks > 0) {
        expectedTime += ms;
        totalTasks -= concurrency;
      }

      const minTime = expectedTime - fluctuationMs;

      //tasks can have some fluctuation so account for that
      expectedTime += fluctuationMs;

      it(
        `shld do ${concurrency} tasks under ${expectedTime}ms`,
        async () => {
          await promisePool(timeouts, concurrency);
        },
        {
          timeout: expectedTime,
        }
      );

      it.fails(
        `shld NOT do ${concurrency} under ${minTime}ms`,
        async () => {
          await promisePool(timeouts, concurrency);
        },
        {
          timeout: minTime,
        }
      );
    }
  });

  describe("shld do correct return and error handling", () => {
    it("shld correctly return data on success", async () => {
      let timeouts = [timeout(10), timeout(20), timeout(30), timeout(10), timeout(20)];
      for (let concurrency = timeouts.length; concurrency >= 1; concurrency--) {
        expect(await promisePool(timeouts)).toStrictEqual([
          {
            status: "success",
            value: 10,
          },
          {
            status: "success",
            value: 20,
          },
          {
            status: "success",
            value: 30,
          },
          {
            status: "success",
            value: 10,
          },
          {
            status: "success",
            value: 20,
          },
        ]);
      }
    });

    describe("shld do proper error handling", () => {
      it("shld handle case where some promises are rejected", async () => {
        let timeouts = [timeoutReject(10), timeoutReject(10), timeout(10), timeoutReject(10), timeout(10)];
        expect(await promisePool(timeouts)).toStrictEqual([
          {
            status: "error",
            reason: "rejected",
          },
          {
            status: "error",
            reason: "rejected",
          },
          {
            status: "success",
            value: 10,
          },
          {
            status: "error",
            reason: "rejected",
          },
          {
            status: "success",
            value: 10,
          },
        ]);
      });

      //Kitchen sink handling test
      it("shld handle case where some promises throw an error and some reject and some succeed", async () => {
        let timeouts = [timeoutThrow(), timeoutReject(10), timeout(10), timeoutThrow(), timeout(10)];

        for (let concurrency = timeouts.length; concurrency >= 1; concurrency--) {
          expect(await promisePool(timeouts)).toStrictEqual([
            {
              status: "error",
              reason: TIMEOUT_TEST_ERROR,
            },
            {
              status: "error",
              reason: "rejected",
            },
            {
              status: "success",
              value: 10,
            },
            {
              status: "error",
              reason: TIMEOUT_TEST_ERROR,
            },
            {
              status: "success",
              value: 10,
            },
          ]);
        }
      });
    });
  });
});
