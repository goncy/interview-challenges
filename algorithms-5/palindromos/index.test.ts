import { expect, describe, it } from "vitest";

import posiblePalindromo from ".";

describe("posiblePalindromo", () => {
  it("debería devolver true si es un posible palindromo", () => {
    expect(posiblePalindromo(3357665)).toBe(true);
    expect(posiblePalindromo(2121)).toBe(true);
    expect(posiblePalindromo(1331)).toBe(true);
    expect(posiblePalindromo(3357665)).toBe(true);
  });

  it("debería devolver false si no es un posible palindromo", () => {
    expect(posiblePalindromo(1294)).toBe(true);
  });
});
