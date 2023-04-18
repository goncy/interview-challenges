import { describe, it, assert } from "vitest";

import contarDuplicados from ".";

describe("contarDuplicados", () => {
  it("deberia contar los duplicados", () => {
    assert.strictEqual(contarDuplicados(""), 0);
    assert.strictEqual(contarDuplicados("abcde"), 0);
    assert.strictEqual(contarDuplicados("aabbcde"), 2);
    assert.strictEqual(contarDuplicados("aabBcde"), 2, "should ignore case");
    assert.strictEqual(contarDuplicados("Indivisibility"), 1);
    assert.strictEqual(contarDuplicados("Indivisibilities"), 2, "characters may not be adjacent");
  });
});
