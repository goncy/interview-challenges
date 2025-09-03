import {expect, describe, it} from "vitest";

import tieneDuplicados from ".";

describe("tieneDuplicados", () => {
  it("devuelve true para array con elementos repetidos", () => 
    expect(tieneDuplicados(["1", "2", "2", "3", "4", "4", "5"])).toBe(true));
  
  it("devuelve true para array con todos los elementos iguales", () =>
    expect(tieneDuplicados(["5", "5", "5", "5"])).toBe(true));
  
  it("devuelve false para array sin duplicados", () =>
    expect(tieneDuplicados(["1", "2", "3"])).toBe(false));
  
  it("devuelve false para arrays vacíos", () =>
    expect(tieneDuplicados([])).toBe(false));
  
  it("devuelve true para duplicados no consecutivos", () =>
    expect(tieneDuplicados(["7", "3", "8", "3", "1", "9"])).toBe(true));
  
  it("devuelve false para un solo elemento", () =>
    expect(tieneDuplicados(["42"])).toBe(false));
  
  it("maneja diferentes tipos de datos", () =>
    expect(tieneDuplicados(["a", "b", "a"])).toBe(true));
});