export const timeout = (delay: number) => (): Promise<number> =>
  new Promise((resolve) => setTimeout(() => resolve(delay), delay));

export const timeoutReject = (delay: number) => (): Promise<number> =>
  new Promise((_, reject) => setTimeout(() => reject("rejected"), delay));

export const TIMEOUT_TEST_ERROR = new Error("thrownerror");

export const timeoutThrow = () => () =>
  new Promise(() => {
    throw TIMEOUT_TEST_ERROR;
  });
