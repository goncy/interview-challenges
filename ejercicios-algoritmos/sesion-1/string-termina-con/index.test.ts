import { expect, describe, it } from "vitest";

import stringTerminaCon from ".";

describe("stringTerminaCon", () => {
  it("debería devolver true si el string termina con el segundo parametro", () => {
    expect(stringTerminaCon("abc", "bc")).toBe(true);
  });

  it("debería devolver false si el string no termina con el segundo parametro", () => {
    expect(stringTerminaCon("abc", "d")).toBe(false);
  });
});
