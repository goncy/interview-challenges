import {expect, describe, it} from "vitest";

import palabrador from ".";

describe("palabrador", () => {
  it("lador", () => expect(palabrador(["pala", "labrador", "dormir"])).toBe("lador"));
  it("nabola", () => expect(palabrador(["cana", "nabo", "bola", "lado"])).toBe("nabola"));
});
