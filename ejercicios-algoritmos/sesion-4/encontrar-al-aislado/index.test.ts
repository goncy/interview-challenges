import { expect, describe, it } from "vitest";

import buscarAislado from ".";

describe("buscarAislado", () => {
  it("debería devolver el número aislado para [0, 1, 2]", () => expect(buscarAislado([0, 1, 2])).toBe(1));
  it("debería devolver el número aislado para [1, 2, 3]", () => expect(buscarAislado([1, 2, 3])).toBe(2));
  it("debería devolver el número aislado para [2, 6, 8, 10, 3]", () => expect(buscarAislado([2, 6, 8, 10, 3])).toBe(3));
  it("debería devolver el número aislado para [0, 0, 3, 0, 0]", () => expect(buscarAislado([0, 0, 3, 0, 0])).toBe(3));
  it("debería devolver el número aislado para [1, 1, 0, 1, 1]", () => expect(buscarAislado([1, 1, 0, 1, 1])).toBe(0));
});
