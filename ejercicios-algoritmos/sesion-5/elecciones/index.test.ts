import {expect, describe, it} from "vitest";

import unificarVotos from ".";

describe("unificarVotos", () => {
  it("[[{id: 123456, nombre: 'Gaspar', voto: 'Bingo'}, {id: 234123, nombre: 'Clelia', voto: 'Sudoku'}], [{id: 123456, nombre: 'Gaspar', voto: 'Bingo'}], [{id: 643723, nombre: 'Pedro', voto: 'Sudoku'}]]", () =>
    expect(
      unificarVotos([
        [{id: "123456", nombre: 'Gaspar', voto: 'Bingo'}, {id: "234123", nombre: 'Clelia', voto: 'Sudoku'}],
        [{id: "123456", nombre: 'Gaspar', voto: 'Bingo'}],
        [{id: "643723", nombre: 'Pedro', voto: 'Sudoku'}]
      ], 'id'),
    ).toMatchObject([
      {id: "123456", nombre: 'Gaspar', voto: 'Bingo'},
      {id: "234123", nombre: 'Clelia', voto: 'Sudoku'},
      {id: "643723", nombre: 'Pedro', voto: 'Sudoku'}
    ]));
});
