import { describe, it, assert } from "vitest";

import ordenarEmociones from ".";

describe("ordenarEmociones", () => {
  it("deberia ordenar las emociones de manera descendente", () => {
    assert.deepEqual(ordenarEmociones([":D", "T_T", ":D", ":("], true), [":D", ":D", ":(", "T_T"]);
    assert.deepEqual(ordenarEmociones(["T_T", ":D", ":(", ":("], true), [":D", ":(", ":(", "T_T"]);
    assert.deepEqual(ordenarEmociones([":)", "T_T", ":)", ":D", ":D"], true), [
      ":D",
      ":D",
      ":)",
      ":)",
      "T_T",
    ]);
  });

  it("deberia ordenar las emociones de manera ascendente", () => {
    assert.deepEqual(ordenarEmociones([":D", "T_T", ":D", ":("], false), ["T_T", ":(", ":D", ":D"]);
    assert.deepEqual(ordenarEmociones(["T_T", ":D", ":(", ":("], false), ["T_T", ":(", ":(", ":D"]);
    assert.deepEqual(ordenarEmociones([":)", "T_T", ":)", ":D", ":D"], false), [
      "T_T",
      ":)",
      ":)",
      ":D",
      ":D",
    ]);
  });

  it("deberia retornar un array vacio si no hay emociones", () => {
    assert.deepEqual(ordenarEmociones([], true), []);
    assert.deepEqual(ordenarEmociones([], false), []);
  });
});
