import { isValidFrequency } from "./index";

describe("isValidFrequency", () => {
  test("valid", () => {
    expect(isValidFrequency("a")).toBeTruthy();
    expect(isValidFrequency("aa")).toBeTruthy();
    expect(isValidFrequency("abc")).toBeTruthy();
    expect(isValidFrequency("aaabcabbbccc")).toBeTruthy();
    expect(isValidFrequency("aabb")).toBeTruthy();
  });

  test("isn't valid", () => {
    expect(isValidFrequency()).toBeFalsy();
    expect(isValidFrequency("")).toBeFalsy();
    expect(isValidFrequency("abcc")).toBeFalsy();
    expect(isValidFrequency("aabbaa")).toBeFalsy();
    expect(isValidFrequency("aaabcabbbcc")).toBeFalsy();
  });
});
