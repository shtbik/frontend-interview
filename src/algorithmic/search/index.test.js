import { search } from "./index";

describe("search", () => {
  test("found", () => {
    expect(search([1, 2, 3, 5, 2], 2)).toBe(1);
    expect(search([1, 2, 3, 5], 1)).toBe(0);
    expect(search([1, 2, 3, 5], 5)).toBe(3);
    expect(search([-1, 0, 5, 1000], 5)).toBe(2);
    expect(search([-155, 4, 7, 10, 99, 125], 99)).toBe(4);
  });

  test("not found", () => {
    expect(search([-6, 1, 3, 4, 12351, 14222, 62125], 13241)).toBeNull();
    expect(search([-6, 1, 3, 4, 612, 1244, 78912, 10000], 10200)).toBeNull();
    expect(search([-6, 1, 3, 4, 12351, 14222, 62125], -10)).toBeNull();
  });
});
