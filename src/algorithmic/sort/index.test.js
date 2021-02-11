import { sort } from "./index";

describe("sort", () => {
  test("to be true", () => {
    expect(sort([1, 4, 0, 2, 5])).toEqual([0, 1, 2, 4, 5]);
    expect(sort([100, -2, 5, 3, 2])).toEqual([-2, 2, 3, 5, 100]);
    expect(sort([6, 6, 2, 0, 124, 55])).toEqual([0, 2, 6, 6, 55, 124]);
    expect(sort([-97, -95, -99, -95, -91, -91, -92, -98, -97, -93])).toEqual([
      -99,
      -98,
      -97,
      -97,
      -95,
      -95,
      -93,
      -92,
      -91,
      -91
    ]);
  });
});
