import {expect, describe, it} from "vitest";

import encontrarLIS from ".";

describe("encontrarLIS", () => {
  it("[4, 3, 5, 1, 6] => 3", () => expect(encontrarLIS([4, 3, 5, 1, 6])).toBe(3));
  it("[3, 10, 2, 1, 20] => 3", () => expect(encontrarLIS([3, 10, 2, 1, 20])).toBe(3));
  it("[3, 2] => 1", () => expect(encontrarLIS([3, 2])).toBe(1));
  it("[50, 3, 10, 7, 40, 80] => 4", () => expect(encontrarLIS([50, 3, 10, 7, 40, 80])).toBe(4));
  it("[9, 9, 4, 2] => 1", () => expect(encontrarLIS([9, 9, 4, 2])).toBe(1));
  it("[10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90] => 7", () =>
    expect(encontrarLIS([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90])).toBe(7));
});
