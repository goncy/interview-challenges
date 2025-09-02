import {expect, describe, it} from "vitest";

import sumaDeRangos from ".";

describe("sumaDeRangos", () => {
  it("suma números del 1 al 5", () => expect(sumaDeRangos(1, 5)).toBe(15));
  it("suma números del 3 al 7", () => expect(sumaDeRangos(3, 7)).toBe(25));
  it("devuelve 0 para rango inválido", () => expect(sumaDeRangos(5, 1)).toBe(0));
  it("devuelve el mismo número para rango de un solo elemento", () => expect(sumaDeRangos(4, 4)).toBe(4));
  it("maneja números negativos", () => expect(sumaDeRangos(-3, 2)).toBe(-3));
});