import {expect, describe, it} from "vitest";

import numerosPerdidos from ".";

describe("numerosPerdidos", () => {
  it("encuentra números perdidos en secuencia simple", () => 
    expect(numerosPerdidos([1, 3, 5, 7])).toEqual([2, 4, 6]));
  
  it("encuentra números perdidos al inicio", () => 
    expect(numerosPerdidos([2, 4, 6, 8])).toEqual([1, 3, 5, 7]));
  
  it("devuelve array vacío si no faltan números", () => 
    expect(numerosPerdidos([1, 2, 3, 4, 5])).toEqual([]));
  
  it("encuentra un solo número perdido", () => 
    expect(numerosPerdidos([3, 1, 4])).toEqual([2]));
  
  it("maneja array vacío", () => 
    expect(numerosPerdidos([])).toEqual([]));
});