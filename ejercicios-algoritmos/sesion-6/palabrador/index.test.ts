import {expect, describe, it} from "vitest";

import palabrador from ".";

describe("palabrador", () => {
  it("lador", () => expect(palabrador(["pala", "labrador", "dormir"])).toBe("lador"));
  it("nabola", () => expect(palabrador(["cana", "nabo", "bola", "lado"])).toBe("nabola"));
  it("No se puede - 1", () =>
    expect(palabrador(["cha", "rola"])).toBe("No se puede formar la palabra"));
  it("Siamo fuori de la copa", () =>
    expect(palabrador(["pala", "labo", "boca", "libertadores"])).toBe(
      "No se puede formar la palabra",
    ));
});
