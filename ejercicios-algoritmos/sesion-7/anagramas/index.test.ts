import {expect, describe, it} from "vitest";

import sonAnagramas from ".";

describe("sonAnagramas", () => {
  it("reconoce anagramas simples", () => 
    expect(sonAnagramas("listen", "silent")).toBe(true));
  
  it("reconoce anagramas con diferentes casos", () =>
    expect(sonAnagramas("Elbow", "BELOW")).toBe(true));
  
  it("reconoce que no son anagramas", () =>
    expect(sonAnagramas("hello", "world")).toBe(false));
  
  it("maneja espacios en anagramas", () =>
    expect(sonAnagramas("A gentleman", "Elegant man")).toBe(true));
  
  it("maneja strings vacíos", () =>
    expect(sonAnagramas("", "")).toBe(true));
    
  it("maneja letras repetidas", () =>
    expect(sonAnagramas("food", "doff")).toBe(false));
});