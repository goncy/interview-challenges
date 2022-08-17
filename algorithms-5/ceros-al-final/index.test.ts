import { expect, describe, it } from "vitest";

import moverCeros from ".";

describe("moverCeros", () => {
  it("debería mover los ceros al final", () => {
    expect(moverCeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toMatchObject([
      1, 2, 1, 1, 3, 1, 0, 0, 0, 0,
    ]);
    expect(moverCeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])).toMatchObject([
      false,
      1,
      1,
      2,
      1,
      3,
      "a",
      0,
      0,
    ]);
  });
});
