import { describe, it, assert } from "vitest";

import encontrarAlImpar from ".";

describe("encontrarAlImpar", () => {
  it("deberia encontrar el impar", () => {
    assert.strictEqual(encontrarAlImpar([7]), 7);
    assert.strictEqual(encontrarAlImpar([0]), 0);
    assert.strictEqual(encontrarAlImpar([1, 1, 2]), 2);
    assert.strictEqual(encontrarAlImpar([0, 1, 0, 1, 0]), 0);
    assert.strictEqual(encontrarAlImpar([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4);
    assert.strictEqual(
      encontrarAlImpar([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
      5
    );
    assert.strictEqual(encontrarAlImpar([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
    assert.strictEqual(encontrarAlImpar([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
    assert.strictEqual(encontrarAlImpar([10]), 10);
    assert.strictEqual(encontrarAlImpar([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
    assert.strictEqual(encontrarAlImpar([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
  });
});
