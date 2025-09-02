import {expect, describe, it} from "vitest";

import rotarMatriz from ".";

describe("rotarMatriz", () => {
  it("rota una matriz 3x3", () => {
    const matriz = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    
    rotarMatriz(matriz);
    
    expect(matriz).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]);
  });

  it("rota una matriz 2x2", () => {
    const matriz = [
      [1, 2],
      [3, 4]
    ];
    
    rotarMatriz(matriz);
    
    expect(matriz).toEqual([
      [3, 1],
      [4, 2]
    ]);
  });
});