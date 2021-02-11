import { hasDuplicates } from "./index.js";

describe("hasDuplicates", () => {
  test("hasn't duplicates", () => {
    expect(hasDuplicates([])).toBeFalsy();
    expect(hasDuplicates([1, 2])).toBeFalsy();
    expect(hasDuplicates([1, 2, 3, 4])).toBeFalsy();
    expect(hasDuplicates([0, 99, 102, 555, 12, 3])).toBeFalsy();
    expect(hasDuplicates([-1, 4, 2, 1241, 5, -99])).toBeFalsy();
  });

  test("has duplicates", () => {
    expect(hasDuplicates([1, 2, 3, 1])).toBeTruthy();
    expect(hasDuplicates([5, 2, 3, 1, 1])).toBeTruthy();
    expect(hasDuplicates([0, 13, 24, 22, 1, 9, 8, 9])).toBeTruthy();
    expect(hasDuplicates([0, 0, 13, 24, 22, 1, 9, 8, 9])).toBeTruthy();
  });
});
