import {expect, describe, it} from "vitest";

import esUnaLetra from ".";

describe("esUnaLetra", () => {
  it("'a' es una letra", () => expect(esUnaLetra("a")).toBe(true));
  it("'A' es una letra", () => expect(esUnaLetra("A")).toBe(true));
  it("'1' no es una letra", () => expect(esUnaLetra("1")).toBe(false));
  it("'' no es una letra", () => expect(esUnaLetra("")).toBe(false));
});
