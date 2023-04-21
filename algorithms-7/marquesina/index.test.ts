import { describe, it, assert } from "vitest";

import marquesina from ".";

describe("marquesina", () => {
  it("debería armar la maquesina", () => {
    assert.deepEqual(marquesina("Hola"), ["olaH", "laHo", "aHol", "Hola"]);
    assert.deepEqual(marquesina("Hello"), ["elloH", "lloHe", "loHel", "oHell", "Hello"]);
  });
});
