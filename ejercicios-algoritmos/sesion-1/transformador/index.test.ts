import { expect, describe, it } from "vitest";

import transformer from ".";

describe("transformer", () => {
  it("deberia transformar el objeto de input a output", () => {
    expect(
      transformer({
        nombres: ["Juan", "Pedro", "María"],
        edades: [23, 45, 18],
      })
    ).toEqual([
      {
        id: 1,
        nombre: "Juan",
        edad: 23,
      },
      {
        id: 2,
        nombre: "Pedro",
        edad: 45,
      },
      {
        id: 3,
        nombre: "María",
        edad: 18,
      },
    ]);
  });
});
