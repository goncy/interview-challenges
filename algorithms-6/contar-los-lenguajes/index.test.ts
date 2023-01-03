import type { Developer } from "./types";

import { expect, describe, it } from "vitest";

import contarLosLenguajes from ".";

describe("contarLosLenguajes", () => {
  const actual: Developer[] = [
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "C",
    },
    {
      firstName: "Anna",
      lastName: "R.",
      country: "Liechtenstein",
      continent: "Europe",
      age: 52,
      language: "JavaScript",
    },
    {
      firstName: "Ramon",
      lastName: "R.",
      country: "Paraguay",
      continent: "Americas",
      age: 29,
      language: "Ruby",
    },
    {
      firstName: "George",
      lastName: "B.",
      country: "England",
      continent: "Europe",
      age: 81,
      language: "C",
    },
  ];
  const expected = { C: 2, JavaScript: 1, Ruby: 1 };

  it("debería contar los lenguajes correctamente", () =>
    expect(contarLosLenguajes(actual)).toMatchObject(expected));
});
