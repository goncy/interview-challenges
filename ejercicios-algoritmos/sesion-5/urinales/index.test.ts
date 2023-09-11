import {expect, describe, it} from "vitest";

import urinalesLibres from ".";

describe("urinalesLibres", () => {
  it("10001 => 1", () => expect(urinalesLibres("10001")).toBe(1));
  it("1001 => 0", () => expect(urinalesLibres("1001")).toBe(0));
  it("00000 => 3", () => expect(urinalesLibres("00000")).toBe(3));
  it("000 => 2", () => expect(urinalesLibres("000")).toBe(2));
  it("01000 => 1", () => expect(urinalesLibres("01000")).toBe(1));
});
