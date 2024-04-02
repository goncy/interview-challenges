import {expect, describe, it} from "vitest";

import quejaJusta from ".";

describe("quejaJusta", () => {
  it("abcabc", () => expect(quejaJusta("abcabc")).toBe(true));
  it("la pandemia fue un inside job", () =>
    expect(quejaJusta("la pandemia fue un inside job")).toBe(false));
});
