import {expect, describe, it} from "vitest";

import conteoCaracteres from ".";

describe("conteoCaracteres", () => {
  it("cuenta caracteres en palabra simple", () => 
    expect(conteoCaracteres("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 }));
  
  it("cuenta caracteres incluyendo espacios y signos", () =>
    expect(conteoCaracteres("Hello World!")).toEqual({ 
      H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 
    }));
  
  it("devuelve objeto vacío para string vacío", () =>
    expect(conteoCaracteres("")).toEqual({}));
  
  it("distingue mayúsculas de minúsculas", () =>
    expect(conteoCaracteres("Aa")).toEqual({ A: 1, a: 1 }));
});