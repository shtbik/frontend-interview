import { promiseChain } from "./index";

describe("promiseChain", () => {
  test("without promises", async () => {
    expect(await promiseChain([1, 2, 3])).toEqual([1, 2, 3]);
    expect(await promiseChain([])).toEqual([]);
  });

  test("async", async () => {
    const f1 = async () => 1;
    const f2 = async () => 2;
    const f3 = async () => 3;
    const arr = [f1(), f2(), f3()];

    expect(await promiseChain(arr)).toEqual([1, 2, 3]);
  });

  test("without reject", async () => {
    const f1 = new Promise(resolve => resolve(1));
    const f2 = new Promise(resolve => resolve(2));
    const f3 = new Promise(resolve => resolve(3));
    const arr = [f1, f2, f3];

    expect(await promiseChain(arr)).toEqual([1, 2, 3]);
  });

  test("with reject", async () => {
    const f1 = new Promise(resolve => resolve(1));
    const f2 = new Promise(resolve => resolve(2));
    const f3 = new Promise((_, reject) => reject(3));
    const arr = [f1, f2, f3];

    expect(await promiseChain(arr)).toEqual([1, 2, 3]);
  });
});
