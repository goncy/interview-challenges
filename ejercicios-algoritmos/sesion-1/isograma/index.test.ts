import { expect, describe, it } from "vitest";

import esIsograma from ".";

describe("esIsograma", () => {
  it("debería devolver true si es un isograma", () => {
    expect(esIsograma("gato")).toBe(true);
  });

  it("debería ignorar acentos", () => {
    expect(esIsograma("Murciélago")).toBe(true);
  });

  it("debería ignorar mayúsculas", () => {
    expect(esIsograma("Casa")).toBe(false);
    expect(esIsograma("PeRrO")).toBe(false);
    expect(esIsograma("GaTo")).toBe(true);
  });
});
